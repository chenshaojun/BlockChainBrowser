//获取服务器信息
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
  console.log(r.ledger_index);
  remote.disconnect()
}, 500);
console.log('========================================');
return 0

function t() {
    remote.connect(function (err, ret) {
      if (err) {
        console.log('连接服务器失败')
      } else { 
        r=ret
        console.log('连接服务器')
      }
    })
  }