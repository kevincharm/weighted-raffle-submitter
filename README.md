# Weighted Raffle Submitter Script

## Installation

1. Ensure you have `yarn` and `node>=22` installed
1. Install dependencies by running `yarn`

## Usage

1. Set the environment variables. See `.env.example` for an example.
    - Set the `WEIGHTED_RAFFLE_SUBMITTER_PK` environment variable to the private key of the account that you will use to submit transactions with.
    - Set the `BASE_URL` environment variable to a base RPC (defaults to the public one if not set, but may not be reliable enough to send large transactions).
1. Format entries into a csv file with 2 columns: `address` and `weight`. See `input/entries_example.csv` for an example. You will use this file as the `<entries_file_path>` argument in the next step.
1. Run the script with `yarn start <raffle_address> <entries_file_path>`.
    - Double check that you are submitting the correct entries file, as it's not possible to undo adding entries onchain!
    - Optionally, you can also specify a batch size with `--batch <batch_size>` (defaults to 500 entries per batch).
    - Note that you must be the raffle owner to submit entries.
