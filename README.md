## Neo Filestream - File Sharing App

Keep track of the influence you've had on companies/events.

## Getting Started

nos-local

```
$ git clone https://github.com/nos/nos-local.git
$ cd nos-local
```
Do not run nos-local yet, we will make a quick edit on your neo-local Makefile

```
@docker exec -it neo-python bash np-prompt -p -v

//change to

@docker exec -it neo-python bash
```

Download wallet with gas

```
curl https://s3.amazonaws.com/neo-experiments/neo-privnet-old.wallet -o main.wallet
np-prompt -p
open wallet main.wallet
```

Enter wallet password and rebuild and check balance

```
coz
wallet rebuild
wallet
```

Now install and run nos-client

```
// Clone the nOS repo
$ git clone https://github.com/nos/client.git nos-client

// Navigate to the cloned repository
$ cd nos-client

// Install dependencies and launch the nOS client
// This is used to start developing on the nOS client
$ yarn install && yarn start

```

Under settings in the nos-client change network to nOSLocal

## Deploy the smart contract and start the dapp

Open the neo-python prompt

```
np-prompt -p
build /smart-contracts/neo_filestream.py test 0710 02 True False 'company-name' {addr}
import contract /smart-contracts/neo_filestream.avm 0710 05 True False
```

## Start UI
```
cd ui
yarn start
// Open the nOS client at nos://localhost:1234
```

This is a work in progress
