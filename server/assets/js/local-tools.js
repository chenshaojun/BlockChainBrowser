//获取本地数据的函数
//公用模块
const fs = require('fs')
var async = require("async");
module.exports = {
  //根据index读取区块概要信息
  GetBlockSummary: function (index) {
    var path = Pub.getLedgerPath(index, sails.config.const.blockRoot) // 由index和根目录常量blockRoot转换完整路径
    var readDir = fs.readdirSync(path, 'utf-8')    //读入路径目录下所有文件列表
    for (i = 0; i < readDir.length; i++) {  //遍历列表，找出文件名第一段位index的信息==>ret
      var item = readDir[i].split('.')
      if (item[0] == index + '') {
        var ret = {
          index: item[0],
          time: item[1],
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