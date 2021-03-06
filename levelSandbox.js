/* ===== LEVELSANDBOX.JS file ===================================
/*
/* This file contains the Data Access Layer for the application
/*    The private blockchain to be created uses LevelDB for
/*    persistance
/*    Learn more: level: https://github.com/Level/level
/*
/* ==============================================================

/* ===== Persist data with LevelDB ===================================
|  Project dependencies and storage location
|  =============================================================*/

const level = require('level');
const chainDB = './chaindata';

/* ===== LevelSandbox Class ===============================
|  Class with a constructor for db                        |
|  ======================================================*/
class LevelSandbox {

    constructor() {
        // the db object is configured to reference level at the location indicated by chainDB
        this.db = level(chainDB);
    }

    // Get data from levelDB with key (Promise)
    getLevelDBData(key){
        let self = this;
        return new Promise(function(resolve, reject) {
            self.db.get(key, function(err, value) {
              if (err) reject(err);
              resolve(value);
            });
        });
    }

    // Add data to levelDB with key and value (Promise)
    addLevelDBData(key, value) {
        let self = this;
        return new Promise(function(resolve, reject) {
            self.db.put(key, value, function(err) {
              if (err) reject(err);
              resolve(true);
            });
        });
    }

    // Add data to levelDB with value (Promise)
    addDataToLevelDB(value) {
        let self = this;
        return new Promise(function(resolve, reject) {
            let i = 0;
            self.db.createReadStream()
                .on('data', function(data) {
                    i++;
                })
                .on('error', function(err) {
                    reject(err);
                })
                .on('close', function() {
                    self.addLevelDBData(i, value).then(function(result) {
                        resolve(result);
                    }, function(err) {
                        reject(err);
                    }
                    );
                });
        });
    }

    // Method that returns the height (Promise)
    getBlocksCount() {
        let self = this;
        return new Promise(function(resolve, reject) {
            let i = 0;
            self.db.createReadStream()
                .on('data', function(data) {
                    i++;
                })
                .on('error', function(err) {
                    reject(err);
                })
                .on('close', function() {
                    resolve(i);
                });
        });
    }
}

module.exports.LevelSandbox = LevelSandbox;





