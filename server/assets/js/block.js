//关于block处理的模块

//公用模块
var Pub = require('../../assets/js/utils');
const fs = require('fs')
module.exports = {
  // 获取取一个block信息，入口参数可能是index或/hash（根据位数判断 Hash64位）
  // 返回数据：区块号index.time.交易数num.hash.parent_hash
  // 保留：如果本地有信息则处理后返回，否则数据转入本地后再处理
  GetOneBlock: function (para) {
    var index = para
    if (para.length>30) index =  Pub.tranHash2Index(para)
    var p = Pub.getLedgerPath(index, sails.config.const.blockRoot)
    var readDir = fs.readdirSync(p, 'utf-8')
    for (i = 0; i < readDir.length; i++) {
      var item = readDir[i].split('.')
      if (item[0] == index + '') {
        var ret = {
          index: item[0],
          time: new Date((item[1]) * 1000),
          num: item[2],
          hash: item[3],
          parent_hash: item[4]
        }
        return ret
      }
    }
    return null
  }
}
