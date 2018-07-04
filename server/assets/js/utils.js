//公用模块

module.exports = {
  //获取取一个block信息
  //如果本地有信息则处理后返回，否则数据转入本地后再处理
  GetOneBlock: function(height){
    var ret = {
      height : height,
      item2 : '信息2',
      item3 : '信息3',
      item4 : '信息4'
    }
    return ret 
  }
}