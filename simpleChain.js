/* ===== Executable Test ====================================
|
|  THIS FILE IS INTENDED TO TEST THE PROJECT
|
|          1) Creation of the blockchain.
|          2) Creation of ten additional blocks (to the genesis block).
|          3) Obtaining the height of the blockchain.
|          4) Obtaining a number of blocks, including one which does not exist.
|          5) Block validation (both original and tampered block).
|          6) Blockchain validation (both original and tampered blockchain).
|
|==========================================================*/

const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

console.log("-------------------------");
console.log("Starting project tests...");
console.log("-------------------------");

/************************************************
 ** Creation of Blockchain (genesis block)   ****
 ************************************************/

console.log("---------------------------------------------------------");
console.log("Starting test 1 - Blockchain creation with genesis block.");
console.log("---------------------------------------------------------");

let myBlockChain = new BlockChain.Blockchain();

setTimeout(function () {
  console.log("----------------------------------------------------------");
  console.log("Finishing test 1 - Blockchain creation with genesis block.");
  console.log("----------------------------------------------------------");
}, 10000);

/******************************************
 ** Function to Create Tests Blocks   ****
 ******************************************/

setTimeout(function () {
  console.log("----------------------------------------------------------------------");
  console.log("Starting test 2 - Addition of ten additional blocks to the blockchain.");
  console.log("----------------------------------------------------------------------");
}, 10000);

(function theLoop (i) {
  setTimeout(function () {
    let blockTest = new Block.Block("Test Block - " + (i + 1));
    myBlockChain.addBlock(blockTest).then((result) => {
      console.log(result);
      i++;
      if (i < 10) theLoop(i);
    });
  }, 10000);
  })(0);

setTimeout(function () {
  console.log("-----------------------------------------------------------------------");
  console.log("Finishing test 2 - Addition of ten additional blocks to the blockchain.");
  console.log("-----------------------------------------------------------------------");
}, 110000);

/***********************************************
 ** Function to get the Height of the Chain ****
 ***********************************************/

setTimeout(function () {
  console.log("--------------------------------------------------");
  console.log("Starting test 3 - Obtaining the blockchain height.");
  console.log("--------------------------------------------------");
}, 110000);

setTimeout(function () {
  myBlockChain.getBlockHeight().then((height) => {
    console.log(`The current height of the blockchain is ${height}`);
  }).catch((err) => { console.log(err);});
}, 120000);

setTimeout(function () {
  console.log("---------------------------------------------------");
  console.log("Finishing test 3 - Obtaining the blockchain height.");
  console.log("---------------------------------------------------");
}, 130000);

/***********************************************
 ******** Function to Get a Block  *************
 ***********************************************/

setTimeout(function () {
  console.log("-----------------------------------------------------------------------------------");
  console.log("Starting test 4 - Obtaining a number of blocks, including one which does not exist.");
  console.log("-----------------------------------------------------------------------------------");
}, 130000);

setTimeout(function () {
  myBlockChain.getBlock(0).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 140000);

setTimeout(function () {
  myBlockChain.getBlock(1).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 150000);

setTimeout(function () {
  myBlockChain.getBlock(6).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 160000);

setTimeout(function () {
  myBlockChain.getBlock(9).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 170000);

setTimeout(function () {
  myBlockChain.getBlock(10).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 180000);

setTimeout(function () {
  myBlockChain.getBlock(11).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 190000);

setTimeout(function () {
  console.log("------------------------------------------------------------------------------------");
  console.log("Finishing test 4 - Obtaining a number of blocks, including one which does not exist.");
  console.log("------------------------------------------------------------------------------------");
}, 200000);

/***********************************************
 ***************** Validate Block  *************
 ***********************************************/
setTimeout(function () {
  console.log("---------------------------------------------------------------------------------------");
  console.log("Starting test 5 - Block Validation: ");
  console.log("                  1) Block 5 is validated as OK.");
  console.log("                  2) Tampered block 5 is validated as NOK.");
  console.log("                  3) Tampered block 5 is shown.");
  console.log("                  4) Block 5 its restored to its original contents and validated as OK.");
  console.log("                  5) Restored block 5 is shown.");
  console.log("---------------------------------------------------------------------------------------");
}, 200000);

setTimeout(function () {
  myBlockChain.validateBlock(5).then((valid) => {
    console.log(`Block validation for block 5 is (true = OK / false = NOK): ${valid}`);
  })
  .catch((error) => {
    console.log(error);
  })
}, 210000);

/** Tampering a Block this is only for the purpose of testing the validation methods */
setTimeout(function () {
  myBlockChain.getBlock(5).then((block) => {
    let blockAux = block;
    blockAux.body = "Tampered Block";
    myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
      if(blockModified){
        myBlockChain.validateBlock(blockAux.height).then((valid) => {
          console.log(`Block validation for tampered block 5 is (true = OK / false = NOK): ${valid}`);
        })
        .catch((error) => {
          console.log(error);
        })
      } else {
        console.log("The Block wasn't modified");
      }
    }).catch((err) => { console.log(err);});
  }).catch((err) => { console.log(err);});
}, 220000);

setTimeout(function () {
  myBlockChain.getBlock(5).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 230000);

/** Tampering a Block this is only for the purpose of testing the validation methods */
setTimeout(function () {
  myBlockChain.getBlock(5).then((block) => {
    let blockAux = block;
    blockAux.body = "Test Block - 5";
    myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
      if(blockModified){
        myBlockChain.validateBlock(blockAux.height).then((valid) => {
          console.log(`Block validation for block 5 (restored to its original contents) is (true = OK / false = NOK): ${valid}`);
        })
        .catch((error) => {
          console.log(error);
        })
      } else {
        console.log("The Block wasn't modified");
      }
    }).catch((err) => { console.log(err);});
  }).catch((err) => { console.log(err);});
}, 240000);

setTimeout(function () {
  myBlockChain.getBlock(5).then((block) => {
    console.log(`getBlock: ${JSON.stringify(block)}`);
  }).catch((err) => { console.log(err);});
}, 250000);

setTimeout(function () {
  console.log("---------------------------------------------------------------------------------------");
  console.log("Finishing test 5 - Block Validation. ");
  console.log("---------------------------------------------------------------------------------------");
}, 260000);

/***********************************************
 ***************** Validate Chain  *************
 ***********************************************/

setTimeout(function () {
  console.log("---------------------------------------------------------------------------------------");
  console.log("Starting test 6 - Blockchain Validation: ");
  console.log("                  1) An original blockchain (not tampered) is validated with no errors (as valid).");
  console.log("                  2) Previous block hash in block 6 is tampered.");
  console.log("                  3) Blockchain is validated with errors (block 6 hash is not valid, and its previous hash isn't either.");
  console.log("---------------------------------------------------------------------------------------");
}, 260000);

setTimeout(function () {
  myBlockChain.validateChain().then((errorLog) => {
    if(errorLog.length > 0){
      console.log("The chain is not valid:");
      errorLog.forEach(error => {
        console.log(error);
      });
    } else {
      console.log("No errors found, The chain is Valid!");
    }
  })
  .catch((error) => {
    console.log(error);
  })
}, 270000);

setTimeout(function () {
  myBlockChain.getBlock(6).then((block) => {
    let blockAux = block;
    blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
    myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
      if(blockModified){
        console.log("Block 6 has been tampered with (previous block hash modified).");
      } else {
        console.log("The Block wasn't modified");
      }
    }).catch((err) => { console.log(err);});
  }).catch((err) => { console.log(err);});
}, 280000);

setTimeout(function () {
  myBlockChain.validateChain().then((errorLog) => {
    if(errorLog.length > 0){
      console.log("The chain is not valid:");
      errorLog.forEach(error => {
        console.log(error);
      });
    } else {
      console.log("No errors found, The chain is Valid!");
    }
  })
  .catch((error) => {
    console.log(error);
  })
}, 290000);

setTimeout(function () {
  console.log("---------------------------------------------------------------------------------------");
  console.log("Finishing test 6 - Blockchain Validation. ");
  console.log("---------------------------------------------------------------------------------------");
}, 300000);

setTimeout(function () {
  console.log("--------------------------");
  console.log("Finishing project tests...");
  console.log("--------------------------");
}, 310000);


