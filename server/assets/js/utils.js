//公用模块

module.exports = {
  //增加0前缀到指定位数
  addZeroPrefix: function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
  },
  //得到区块号index对应的目录
  getLedgerPath: function (index, path) {
    // index: 366892 补全为 000 366 892, 全路径为 path/000/366/892/
    var reg = /\d{3}/g
    var subpath = this.addZeroPrefix(index, 9).match(reg).join('/')
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
  //如果本地有信息则处理后返回，否则数据转入本地后再处理
  GetOneBlock: function (height) {
    var ret = {
      height: height,
      test:sails.config.const,
      item2: '信息2',
      item3: '信息3',
      item4: '信息4'
    }
    console.log(ret)    
    return ret
  }
}