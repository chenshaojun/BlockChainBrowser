//公用模块
const fs = require('fs')
module.exports = {
  //增加0前缀到指定位数
  addZeroPrefix: function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
  },
  // index: 366892 补全为 000 366 892, 将最后一个路径去掉，返回[000, 366]
  getBlockSubPathArray: function (index) {
    var reg = /\d{3}/g;
    return this.addZeroPrefix(index, 9).match(reg).slice(0, 2);
  },
  //得到区块号index对应的目录
  getLedgerPath: function (index, path) {
    // index: 366892 补全为 000 366 892, 全路径为 path/000/366/892/
    var reg = /\d{3}/g
    var subpath = this.addZeroPrefix(index, 9).match(reg).slice(0, 2).join('/')
    return path + '/' + subpath
  },
  //得到区块对应文件名--包含信息
  getLedgerFileName: function (path) {
    try {
      var list = fs.readdirSync(path, 'utf-8');
      var regex = new RegExp('.json')
      for (var i = 0; i < list.length; i++) {
        if (list[i].match(regex)) {
          return list[i];
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  },
  //获取取一个block信息
  //返回数据：区块号index.time.交易数num.hash.parent_hash
  //如果本地有信息则处理后返回，否则数据转入本地后再处理
  GetOneBlock: function (index) {
    var p = this.getLedgerPath(index, sails.config.const.blockRoot)
    var readDir = fs.readdirSync(p, 'utf-8')
    for (i=0;i<readDir.length;i++){
      var item = readDir[i].split('.')
      if (item[0]==index+'') {
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
