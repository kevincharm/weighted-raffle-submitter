import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { base } from 'viem/chains'

const account = privateKeyToAccount(process.env.WEIGHTED_RAFFLE_SUBMITTER_PK as `0x${string}`)

export const client = createWalletClient({
    account,
    chain: base,
    transport: http(process.env.BASE_URL),
})

export function getTxUrl(hash: `0x${string}`) {
    return new URL(`/tx/${hash}`, client.chain.blockExplorers.default.url).toString()
}
