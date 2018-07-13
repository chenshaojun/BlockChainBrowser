//和jingtum的接口
//公用模块
const JINGTUM = require('jingtum-lib');
var async=require("async");
module.exports = {
  // 获得一个区块的信息
  getBlock: function (index,res) {
    var remote = new JINGTUM.Remote({
      server: 'wss://c03.jingtum.com:5020',
      local_sign: false
    })
    remote.connect(function (err, ret) {
      if (err) {
        console.log('连接服务器失败')
        res.feedback('200', '连接服务器失败', '3')
      } else {
        op = {ledger_index: "10126168"}
        remote.requestLedger(op).submit(function (err, ret) {
          if (err) {
            conset.log('请求失败')
            res.feedback(200, '请求失败', '3')
          } else {
            res.feedback(200, ret, '0')
            console.log(ret)
            
          }
        })
      }
    })
  }
}
//要使用ASYNC 函数   http://www.ruanyifeng.com/blog/2015/05/async.html