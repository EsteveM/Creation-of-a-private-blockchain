# Creation of a Private Blockchain

This project is intended to create a simplified private blockchain. Data is persisted by means of LevelDB, and the application is implemented with Node.js.

## Table of Contents

* [Description of the Project](#description-of-the-project)
* [Getting Started](#getting-started)
* [Contributing](#contributing)

## Description of the Project

This project implements a simplified private blockchain with Node.js. This allows us to understand the blockchain data model. Data is persisted by using LevelDB. The work that has been made is best described by explaining the files that make up the application:

### The levelSandbox.js file

This file contains the Data Access Layer for the application. As already mentioned, the private blockchain to be created uses [LevelDB](https://github.com/Level/level) for persistance. Both project dependencies and storage location are indicated in this file. A number of functions are found:

* getLevelDBData(key): get data from levelDB with key (using promises).
* addLevelDBData(key, value): add data to levelDB with key and value (using promises).
* addDataToLevelDB(value): add data to levelDB with value (using promises).
* getBlocksCount(): method that returns the height (using promises).

### The Block.js file

This file contains the Block class with a constructor for block. All the attributes that make up a block are included.

### The BlockChain.js file

This file contains the Blockchain class with a constructor for blockchain, and a number of functionalities that are described below:

* generateGenesisBlock(): helper method to create a Genesis Block (always with height = 0).
* getBlockHeight(): get block height, it is a helper method that returns the height of the blockchain.
* addBlock(newBlock): add new block into the blockchain. Note that the block height is the key in LevelDB objects. This function checks if a genesis block already exists. If not, it creates one before adding the new block.
* getBlock(blockHeight): get a block given its block height.
* validateBlock(blockHeight): validate block integrity (block hash vs block contents).
* validateBlockLink(blockHeight): validate block link (chain) integrity (current block hash vs previous block hash).
* validateChain(): validate blockchain validity both in terms of block integrity and correctness of links between blocks.
* \_modifyBlock: utility method to tamper a block for test validation. This method is intended for testing purposes only.

It is noteworthy that the genesis block is added to the blockchain when the blockchain is created.

### The simpleChain.js file

The purpose of this file is to test the project. The test cases covered are:

* Creation of the blockchain.
* Creation of ten additional blocks (to the genesis block).
* Obtaining the height of the blockchain.
* Obtaining a number of blocks, including one which does not exist.
* Block validation (both original and tampered block).
* Blockchain validation (both original and tampered blockchain).

## Getting Started

The procedure to obtain functional a copy of the project on your local machine so that you can further develop and/or test it is explained in this section:

* Firstly, you have to download the project files from this repository onto your local machine.
* Secondly, you have to install Node.js® and NPM, which can be done from the [Node.js® site](https://nodejs.org/en/).
* Thirdly, you have to initialize the project by typing `npm init` on a terminal shell on your project main directory. Then, install crypto-js and level by typing `npm install crypto-js --save` and `npm install level --save`, respectively.
* Once that has been done, you can test the project. The simpleChain.js file has been built for this very purpose, and executes a number of significant and representative test cases. You can execute this file in its current form or after modifying it to further test the application. To do that, just type `node simpleChain.js`.

## Contributing

This repository contains all the work that makes up the project. Individuals and I myself are encouraged to further improve this project. As a result, I will be more than happy to consider any pull requests.


