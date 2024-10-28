export default [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidInputs',
        type: 'error',
    },
    {
        inputs: [],
        name: 'NotInitializing',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'OwnableInvalidOwner',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'version',
                type: 'uint64',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'requestId',
                type: 'uint256',
            },
        ],
        name: 'RaffleDrawInitiated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'beneficiary',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'weight',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'start',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'end',
                type: 'uint256',
            },
        ],
        name: 'RaffleEntryAdded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'randomSeed',
                type: 'uint256',
            },
        ],
        name: 'RaffleFinalised',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'beneficiaries',
                type: 'address[]',
            },
            {
                internalType: 'uint64[]',
                name: 'weights',
                type: 'uint64[]',
            },
        ],
        name: 'addEntries',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'beneficiary',
                type: 'address',
            },
            {
                internalType: 'uint64',
                name: 'weight',
                type: 'uint64',
            },
        ],
        name: 'addEntry',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'numWinners_',
                type: 'uint256',
            },
        ],
        name: 'draw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'entries',
        outputs: [
            {
                internalType: 'address',
                name: 'beneficiary',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'start',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'end',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'cursor',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'count',
                type: 'uint256',
            },
        ],
        name: 'getEntries',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'beneficiary',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'start',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'end',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct WeightedRaffle.Entry[]',
                name: 'out',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getEntriesCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'numWinners_',
                type: 'uint256',
            },
        ],
        name: 'getEstimatedCallbackGas',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'numWinners_',
                type: 'uint256',
            },
        ],
        name: 'getRequestPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: 'requestPrice',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'estimatedCallbackGas',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'n',
                type: 'uint256',
            },
        ],
        name: 'getWinner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner_',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'randomiser_',
                type: 'address',
            },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'numWinners',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'raffleState',
        outputs: [
            {
                internalType: 'enum WeightedRaffle.RaffleState',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'randomiser',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'requestId_',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'randomWord',
                type: 'uint256',
            },
        ],
        name: 'receiveRandomness',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'requestId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'withdrawETH',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        stateMutability: 'payable',
        type: 'receive',
    },
] as const
