/**
 * BlockController
 *
 * @description :: 查询区块信息
 *  
 * 
 */
// 引入公用模块
var JT = require('../../assets/js/jingtum');
module.exports = {
  blocks: function (req, res) {
    var type = req.param('type') || 'now'
    var object = req.param('object') || '1'
    var page = req.param('page') || '1'
    var ret = {}
    /*
    switch (type) {
      case 'now': //最新的块，object表示块数
        pub.Get1(1,2,3)
        console.log('最近的' + object + '个块，第' + page + '页');
        break
      case 'mutil': //不连续的区块概要信息，object指示块index的列表，逗号分隔
        console.log('{' + object + '}块，第' + page + '页');
        break
      case 'range': //连续的区块概要信息，object指示开始块index和结束块index,逗号分隔
        console.log('{' + object + '}块，第' + page + '页');
        break
      case 'day': //一天的区块概要信息，object指示日期{YYYYMMDD}
        console.log('{' + object + '}块，第' + page + '页');
        break
      case 'hash': //根据区块块HASH返回详细信息,object为HASH值
        console.log('{HASH=' + object + '}块');
        break
      case 'height': //一个块的详细信息,object指示块index
        console.log('{index=' + object + '}块');
        break
      default:
        ret = Pub.getOneBlock(1)
        break
    }*/
    JT.getBlock(2, res)
    //return res.feedback(200,ret,'3');
    /* 
      var hs = req.param('heights')
      var h = hs.split(',')
      var t = ''
      for (i = 0; i < h.length; i++) {
        t = '00000000' + h[i]
        h[i] = t.substr(t.length-8,t.length)
      }
      h.sort()
      var d = new Array
      h.forEach(element => {
        d.push(Pub.GetOneBlock(element))
      });
      var ret = {
        data: d,
        err_no: 0,
        err_msg: ''
      } */
  }
}