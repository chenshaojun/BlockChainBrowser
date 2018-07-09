//公用模块
const fs = require('fs')
module.exports = {
  //1. 增加0前缀到指定位数 
  addZeroPrefix: function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
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
