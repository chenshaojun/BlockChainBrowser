//获取账本信息
const JINGTUM = require('jingtum-lib');
var async=require("async");
var remote = new JINGTUM.Remote({
  server: 'wss://c03.jingtum.com:5020',
  local_sign: false
})
console.log('========================================');
var r ={name : '123'}
t()
setTimeout(function() {
  console.log(r);
  remote.disconnect()
}, 500);
console.log('========================================');
return 0

function t() {
    remote.connect(function (err, ret) {
      if (err) {
        console.log('连接服务器失败')
      } else { 
        op = {ledger_hash: "95B3716ED06455762E2E89149D96011657D046D127AEA20D9BD5009EC31F0F14"}
        t = remote.requestServerInfo()
        console.log(t._remote._server._remote)        
        remote.requestLedger(op).submit(function (err, ret) {
          if (err) {
            conset.log('请求失败')            
          } else { 
            r= ret
        
          }
        })
      }
    })
  }