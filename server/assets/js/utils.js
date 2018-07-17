//公用模块
const fs = require('fs')
var async = require("async");
module.exports = {
  //1. 增加0前缀到指定位数 
  addZeroPrefix: function (num, length) {
    return (Array(length).join('0') + num).slice(-length);

    var w = {
      "success": true,
      "msg": "success",
      "data": {
        "success": true,
        "data": {
          "summary": {
            "account_hash": "35BECB0667EBC7FEAA563629FE60DAC5390753C8611BF738E7F37525E696FDFA",
            "close_time_human": 584799970,
            "ledger_index": "10164169",
            "parent_hash": "9004802466180BE72AA8772261C34A84B4ECA103FC9060C19DB4EE3FEACECEC7",
            "totalCoins": 599999999999.4607,
            "transaction_hash":
              "B7864CDA6E19F2076195C47504A91BB01F069F54C4049B956C3EB37D2AB4026B",
            "counts": 2
          },
          "txs": [
            {
              "account": "j3dU8aDo3HmmjxUPxGCws6XoXLmsXawpEx",
              "fee": 0.01,
              "seq": 294,
              "date": 584799970,
              "type": "OfferCreate",
              "hash": "7FD860E85F5E04A714C9AB4A8F67C2EDDC8DBFF6CE792E7B7EA02B43CAD428B9",
              "Account": "j3dU8aDo3HmmjxUPxGCws6XoXLmsXawpEx",
              "Fee": "10000",
              "Flags": 524288,
              "Sequence": 294,
              "SigningPubKey": "028A570F904B21C56702A676F9A10AA04A06D9D79DAF206436930F5ACFEC563589",
              "TakerGets": "200000000000",
              "TakerPays": {
                "currency": "CNY",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "value": "5400"
              },
              "Timestamp": 584799960,
              "TransactionType":
                "OfferCreate",
              "TxnSignature": "3045022100F6C4566ECBC2EEBA1FEF2FA8727A3774E68F9B1A7FCD8896164915C6719E45BA022071D071B2712DC003612EB7C722F3357B3C90F2431840C8F16259D1DF55F40B42",
              "inLedger": 10164169,
              "ledger_index": 10164169,
              "meta": {
                "AffectedNodes": [{
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "jEoSyfChhUMzpRDttAJXuie8XhqyoPBYvV",
                      "Balance": "398762815754",
                      "Flags": 0,
                      "OwnerCount": 0,
                      "Sequence": 13302412
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "109E80FB8CC6D82D4F7F7D77248C2C3C116ECCD4520B3D2A88421FFF94A57B1E",
                    "PreviousFields": {
                      "Balance": "398762805754",
                      "Sequence": 13302411
                    },
                    "PreviousTxnID": "A4F2F33E428DC7C4C8178B53DF6D4C31E73D1D25B9A911C92E65DA4AAF21F82B",
                    "PreviousTxnLgrSeq": 10164168
                  }
                },
                {
                  "CreatedNode": {
                    "LedgerEntryType": "Offer",
                    "LedgerIndex": "284F51E40372226493A864EE07290CD8CA6A9AD7519E88213577121F533FA61B",
                    "NewFields": {
                      "Account": "j3dU8aDo3HmmjxUPxGCws6XoXLmsXawpEx",
                      "BookDirectory": "494FB30D9606C4D2741B349EB1B178099B51EE17EFA9D6DB4D0997A2BCE4C000",
                      "Flags": 131072,
                      "Sequence": 294,
                      "TakerGets": "200000000000",
                      "TakerPays": {
                        "currency": "CNY",
                        "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                        "value": "5400"
                      }
                    }
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "ExchangeRate": "4D0997A2BCE4C000",
                      "Flags": 0,
                      "RootIndex": "494FB30D9606C4D2741B349EB1B178099B51EE17EFA9D6DB4D0997A2BCE4C000",
                      "TakerGetsCurrency": "0000000000000000000000000000000000000000",
                      "TakerGetsIssuer": "0000000000000000000000000000000000000000",
                      "TakerPaysCurrency": "000000000000000000000000434E590000000000",
                      "TakerPaysIssuer": "A582E432BFC48EEDEF852C814EC57F3CD2D41596"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "494FB30D9606C4D2741B349EB1B178099B51EE17EFA9D6DB4D0997A2BCE4C000"
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "j3dU8aDo3HmmjxUPxGCws6XoXLmsXawpEx",
                      "Balance": "1193893489402",
                      "Flags": 0,
                      "OwnerCount": 6,
                      "Sequence": 295
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "E66C9C436A8E0A6ADF8DC2636181AC4D076F38FE0C96E5A9C1176A8B31194E0A",
                    "PreviousFields": {
                      "Balance": "1193893499402",
                      "OwnerCount": 5,
                      "Sequence": 294
                    },
                    "PreviousTxnID": "FCF1C8782EE4B05E314625FC76A5F9CB8F00EAA8E8D52FFA23027DA92B0D250A",
                    "PreviousTxnLgrSeq": 10162312
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Flags": 0,
                      "Owner": "j3dU8aDo3HmmjxUPxGCws6XoXLmsXawpEx",
                      "RootIndex": "F6E44FE5336CA76028BAA9B113439D842ADCD543B300BF319A6D32600504235C"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "F6E44FE5336CA76028BAA9B113439D842ADCD543B300BF319A6D32600504235C"
                  }
                }],
                "TransactionIndex": 0,
                "TransactionResult": "tesSUCCESS"
              },
              "validated": true,
              "gets": "200000000000",
              "pays": {
                "currency": "CNY",
                "issuer": "jGa9J9TkqtBcUoHe2zqhVFFbgUVED6o9or",
                "value": "5400"
              }
            },
            {
              "account": "jQK24Eie6hAB1oUaQFW5zMt3u6VgiA5fYG",
              "fee": 0.000012,
              "seq": 1504,
              "date": 584799970,
              "type": "Payment",
              "hash": "D3A53C5AB46B6C8FBE36841D1F9FD576CE707B6D412869BF39578F78503E98B1",
              "Account": "jQK24Eie6hAB1oUaQFW5zMt3u6VgiA5fYG",
              "Amount": "25000000",
              "Destination": "jPAMqAVVsjBTFNzivCnKPuAoyWC1qgs2qu",
              "Fee": "12",
              "Flags": 0,
              "Memos": [{
                "Memo": {
                  "MemoData": "535754205041594D454E5420666F722074657374696E674A547465737431353331343834373538",
                  "MemoType": "737472696E67"
                }
              }],
              "Sequence": 1504,
              "SigningPubKey": "029C3038644675698F6FDB7BF506C31361AA5E84104ABC6B810D0412438CC43E36",
              "Timestamp": 584799958,
              "TransactionType": "Payment",
              "TxnSignature": "304402202780B744B9D076ECB29664BD261C996574071FA718B6090D83A47DD62FFF9D20022005082D86DF28013A77EF5382DD19C24385EB3E768CC06336F95EE9109CC03623",
              "inLedger": 10164169,
              "ledger_index": 10164169,
              "meta": {
                "AffectedNodes": [{
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "jEoSyfChhUMzpRDttAJXuie8XhqyoPBYvV",
                      "Balance": "398762815766",
                      "Flags": 0,
                      "OwnerCount": 0,
                      "Sequence": 13302413
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "109E80FB8CC6D82D4F7F7D77248C2C3C116ECCD4520B3D2A88421FFF94A57B1E",
                    "PreviousFields": {
                      "Balance": "398762815754",
                      "Sequence": 13302412
                    },
                    "PreviousTxnID": "7FD860E85F5E04A714C9AB4A8F67C2EDDC8DBFF6CE792E7B7EA02B43CAD428B9",
                    "PreviousTxnLgrSeq": 10164169
                  }
                },
                {
                  "CreatedNode": {
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "670EEBD9789F2DF970E5503049C52769333EE1346A2DE12230F02C6E04062CEC",
                    "NewFields": {
                      "Account": "jPAMqAVVsjBTFNzivCnKPuAoyWC1qgs2qu",
                      "Balance": "25000000",
                      "Sequence": 1
                    }
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "jQK24Eie6hAB1oUaQFW5zMt3u6VgiA5fYG",
                      "Balance": "7484912036",
                      "Flags": 0,
                      "OwnerCount": 1,
                      "Sequence": 1505
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "E304CA3D7E26C742241BB74B084A2A11723FC78418F90E54B329C72B75244B4A",
                    "PreviousFields": {
                      "Balance": "7509912048",
                      "Sequence": 1504
                    },
                    "PreviousTxnID": "44065FD33FE7CA1D514D9A7DD549DCFB2E2452C9F964C013642065E4B3546B8B",
                    "PreviousTxnLgrSeq": 10164165
                  }
                }],
                "TransactionIndex": 1,
                "TransactionResult": "tesSUCCESS"
              },
              "validated": true
            }]
        }
      }
    }

















  },

  //2. 根据index得到目录名 
  getLedgerPath: function (index, path) {
    var reg = /\d{3}/g
    var subpath = this.addZeroPrefix(index, 9).match(reg).slice(0, 2).join('/')
    return path + '/' + subpath
  },
  //3. 根据hash获得对应的index    tranHash2Index(hash)
  tranHash2Index: function (hash) {
    return 1 //暂时，调试用
  }
  //4. 得到最后块的index，getLastBlock()
}