import path from 'node:path'
import fs from 'node:fs/promises'
import { getAddress } from 'viem/utils'
import { client, getTxUrl } from './client'
import WeightedRaffleABI from './abis/WeightedRaffle'
import { waitForTransactionReceipt, writeContract } from 'viem/actions'
import { parseArgs } from 'node:util'
import assert from 'node:assert'
import yesno from 'yesno'

const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
        batch: {
            type: 'string',
            short: 'b',
        },
    },
})
assert(
    positionals.length === 2,
    'Expected 2 positional arguments (raffle address and entries path)',
)

const raffleAddress = getAddress(positionals[0])
const entriesPath = path.resolve(process.cwd(), positionals[1])
const batchSize = Number(values.batch) || 500

async function main() {
    // Read addresses and corresponding weights from supplied csv
    const entries = await fs.readFile(entriesPath, 'utf-8').then((data) =>
        data
            .trim()
            .split('\n')
            .slice(1)
            .map((line) => line.split(','))
            .map(([address, weight]) => ({
                address: getAddress(address),
                weight: BigInt(weight),
            })),
    )

    console.log(`Preview of first 10 of ${entries.length} entries:`)
    console.table(entries.slice(0, 10))

    const shouldContinue = await yesno({
        question: `\x1B[33;1mSubmit ${entries.length} entries from ${entriesPath} to ${raffleAddress}?\x1B[0m`,
    })
    if (!shouldContinue) {
        console.log('\x1B[31;1mAborting!\x1B[0m')
        process.exit(0)
    }

    // Batch submit entries
    for (let i = 0; i < entries.length; i += batchSize) {
        const batch = entries.slice(i, i + batchSize)
        const txHash = await writeContract(client, {
            address: raffleAddress,
            abi: WeightedRaffleABI,
            functionName: 'addEntries',
            args: [batch.map((e) => e.address), batch.map((e) => e.weight)],
        })
        console.log(getTxUrl(txHash))
        console.log(`Submitted entries ${i}-${i + batch.length}, waiting for confirmation...`)
        await waitForTransactionReceipt(client, {
            hash: txHash,
            confirmations: 1,
        })
    }
}

main()
