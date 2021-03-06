//关于block处理的模块

//公用模块
var Pub = require('../../assets/js/utils');
const LOCAL = require('../../assets/js/local-tools'); //本地数据处理
const fs = require('fs')
const JINGTUM = require('jingtum-lib');
var request = require('request');
var basePath = './data/block'

module.exports = {
  /*****************************************
   * 获取最新的概要信息
   * 参数:number 区块数 最大20
   * 返回：概要信息数组，每个都是字符串   
   *      index.time.num.hash.parent_hash
   ****************************************/
  getNewSummarys: function (number) {
    var n = number
    ret = new Array()
    if (n > 20) n = 20
    var index = getLastIndex()  //获取当前最后一个区块的index
    for (i = 0; i < number; i++) {
      ret.push(getOneSummary(index-i))
    }
    return ret
  }

  /********************************
   * 获取区块的概要信息
   * 入口参数：
   *  1. 一个整数：返回一个区块的概要信息
   *  2. 逗号分隔的多个整数：返回多个区块的概要信息
   *  3. 减号分隔的两个整数: 返回一个区间的概要信息
   * 
  // 返回数据：{index,time,num,hash,parent_hash}
  // 保留：如果本地有信息则处理后返回，否则数据转入本地后再处理
  // 
  getBlockSummary: function(index){
    var index = para
    if (para.length = 64) hash = Pub.tranHash2Index(para)

    //首先从本地读取数据
    ret = LOCAL.GetBlockSummary(index)
  },


  GetOneBlock: function (para) {
    var index = para
    var hash = para 
    if (para.length > 30) index = Pub.tranHash2Index(para)


    var p = Pub.getLedgerPath(index, sails.config.const.blockRoot)
    var readDir = fs.readdirSync(p, 'utf-8')
    for (i = 0; i < readDir.length; i++) {
      var item = readDir[i].split('.')
      if (item[0] == index + '') {
        var ret = {
          index: item[0],
          time: item[1],
          num: item[2],
          hash: item[3],
          parent_hash: item[4]
        }
        console.log(ret);
        return ret
      }
    }
    //没有需要在线增加
    var remote = new JINGTUM.Remote({
      server: 'wss://c03.jingtum.com:5020',
      local_sign: false
    })

    remote.connect(function (err, ret) {
      if (err) {
        console.log('连接服务器失败')
      } else {
        console.log('连接服务器')
        index = ret.ledger_index  //高度
        hash = ret.ledger_hash    //当前HASH
        summary = null
        request('http://state.jingtum.com/query/ledger/' + hash, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var data = eval('(' + body + ')');
            summary = data.data.data.summary
            console.log(index)
            console.log(hash)
            console.log(summary)
          }
          console.log(getBlockSubPathArray(index))
          f = createPathByBase(basePath, getBlockSubPathArray(index))
          BlockName = f + '/' + index + '.' + summary.close_time_human + '.' + summary.counts + '.' + hash + '.' + summary.parent_hash
          console.log(BlockName);
          console.log('-------------');
          fs.writeFileSync(BlockName, 'utf-8')
          console.log('======================');

          this(index)
        })
        remote.disconnect()
      }
    })
    return null
  }
}



function addZeroPrefix(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

function getBlockSubPathArray(index) {
  var reg = /\d{3}/g;
  return addZeroPrefix(index, 9).match(reg).slice(0, 2);
}
// check path exist or create it, based on a path
function createPathByBase(basePath, subArray) {
  var full = basePath;
  for (var i = 0; i < subArray.length; i++) {
    full = full + '/' + subArray[i];
    // if (!fs.existsSync(full)) {
    try {
      console.log(full);
      fs.mkdirSync(full);
    } catch (e) {
      if (e.errno === -17) {// path already exist, ignore
      } else {// other error, write log
        try {
          fs.writeFileSync('./error.log', JSON.stringify(e), 'utf-8');
        } catch (e2) {// write log error, ignore
        }
      }
      continue;
    }
    // }
  }
  return full;
}
function getBlockName(blockInfo) {
  // ledger 的文件名 ledger_index.closed_time.transactions_count.ledger_hash.parent_hash
  return blockInfo[0] + '.' + blockInfo[1] + '.' + blockInfo[2] + '.' + blockInfo[3] + '.' + blockInfo[4];
}

function t(r) {
  console.log(r);
}