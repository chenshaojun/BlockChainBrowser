/**
 * BlockController
 *
 * @description :: 查询区块信息
 *  
 * 获取区块信息  
 *  路由：'get /block/:heights': 'BlockController.blocks',
 * 
 *  请求：GET /block/heights
 * 
 *    例如：GET /block/123456                   //一个区块
 * 
 *    或者：GET /block/123456,11234,12445       //多个区块
 * 
 *  响应
 * 
 *     {
 *       "data": ...,        -- 具体的 API 响应结果
 *       "err_no": 0,
 *       "err_msg": null 
 *     }
 *   其中：
 *     data: 响应结果（待分析）
 *       {
 *         height: int 块高度
 *         version: int 块版本
 *         mrkl_root: string Merkle Root
 *         curr_max_timestamp: int 块最大时间戳
 *         timestamp: int 块时间戳
 *         bits: int bits
 *         nonce: int nonce
 *         hash: string 块哈希
 *         prev_block_hash: string 前向块哈希，如不存在，则为 null
 *         next_block_hash: string 后向块哈希，如不存在，则为 null
 *         size: int 块体积
 *         pool_difficulty: int 矿池难度
 *         difficulty: int 块难度
 *         tx_count: int 块奖励
 *         reward_block: int 块奖励
 *         reward_fees: int 块手续费
 *         created_at: int 该记录系统处理时间，无业务含义
 *         confirmations: int 确认数
 *         extras: {
 *             relayed_by: string 块播报方
 *         }
 *       }
 *     err_no:
 *       0 正常
 *       1 找不到该资源
 *       2 参数错误
 *     err_msg:
 *       错误信息
 * 
 *   陈少军
 *   2018.7.4
 * 
 */
const Pub = require('../../assets/js/utils');
module.exports = {
  blocks: function (req, res) {
  var ret = {
    type: req.param('type'),
    object: req.param('object'),
    page: req.param('page'),
    
  }
  console.log(ret)
  
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


    res.json(ret)
  }
}