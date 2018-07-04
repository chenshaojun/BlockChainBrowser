API设计
-----------------------------------------------------------------
1、区块
1.1 获取区块信息    http://localhost:1337/block/15,123,441,41,5
  GET /block/heights
    例如：GET /block/123456
    或者：GET /block/123456,11234,12445
  响应
    {
      "data": ...,        -- 具体的 API 响应结果
      "err_no": 0,
      "err_msg": null 
    }
  其中：
    data: 响应结果（待分析）
      {
        height: int 块高度
        version: int 块版本
        mrkl_root: string Merkle Root
        curr_max_timestamp: int 块最大时间戳
        timestamp: int 块时间戳
        bits: int bits
        nonce: int nonce
        hash: string 块哈希
        prev_block_hash: string 前向块哈希，如不存在，则为 null
        next_block_hash: string 后向块哈希，如不存在，则为 null
        size: int 块体积
        pool_difficulty: int 矿池难度
        difficulty: int 块难度
        tx_count: int 块奖励
        reward_block: int 块奖励
        reward_fees: int 块手续费
        created_at: int 该记录系统处理时间，无业务含义
        confirmations: int 确认数
        extras: {
            relayed_by: string 块播报方
        }
      }
    err_no:
      0 正常
      1 找不到该资源
      2 参数错误
    err_msg:
      错误信息
    



*****************************************************************
参考资料1


https://etherscan.io/apis  

{
  "status":"1",
  "message":"OK",
  "result":
  {
    "blockNumber":"2165403",
    "timeStamp":"1472533979",
    "blockMiner":"0x13a06d3dfe21e0db5c016c03ea7d2509f7f8d1e3",
    "blockReward":"5314181600000000000",
    "uncles":
    [
      {
        "miner":"0xbcdfc35b86bedf72f0cda046a3c16829a2ef41d1",
        "unclePosition":"0",
        "blockreward":"3750000000000000000"
      },
      {
        "miner":"0x0d0c9855c722ff0c78f21e43aa275a5b8ea60dce",
        "unclePosition":"1",
        "blockreward":"3750000000000000000"
      }
    ],
    "uncleInclusionReward":"312500000000000000"
  }
}
----------------------------------------------------------------
BTC.com 比特币区块链浏览器 API 分析 https://btc.com/api-doc

使用 BTC.COM 提供的区块链数据 API，实时获取比特币网络数据。


1.请求
  GET /block/1   
  GET /block/2
  GET /block/3
  <==>
  GET /block/1,2,3   批量请求 返回数组.批量获取时，如果对应的值不存在，则为null。
  如无特别说明，批量请求的最大数量为 50。
  对于 POST 请求，均使用 JSON 编码。

2.响应类型
  所有的响应类型均为application/json
  {
    "data": ...,        -- 具体的 API 响应结果
    "err_no": 0,
    "err_msg": null 
  }
  响应体中的data、err_no和err_msg为固定字段，含义如下：
    data，具体 API 响应的数据
    error_no，错误码，0为正常，非0为错误，具体的错误码对照如下：
      0 正常
      1 找不到该资源
      2 参数错误
    error_msg，错误信息，供调试使用。如果没有错误，则此字段不出现。
  注意：
    在表示金额时，为避免浮点数产生精度问题，所有的金额单位均为聪。

3.响应类型
(1) Block
    Block {
        height: int 块高度
        version: int 块版本
        mrkl_root: string Merkle Root
        curr_max_timestamp: int 块最大时间戳
        timestamp: int 块时间戳
        bits: int bits
        nonce: int nonce
        hash: string 块哈希
        prev_block_hash: string 前向块哈希，如不存在，则为 null
        next_block_hash: string 后向块哈希，如不存在，则为 null
        size: int 块体积
        pool_difficulty: int 矿池难度
        difficulty: int 块难度
        tx_count: int 块奖励
        reward_block: int 块奖励
        reward_fees: int 块手续费
        created_at: int 该记录系统处理时间，无业务含义
        confirmations: int 确认数
        extras: {
            relayed_by: string 块播报方
        }
    }
  块中记录的timestamp不是随着高度严格递增的。
  在这里，我们添加了curr_max_timestamp块最大时间戳字段，它是指在该块产生时，所有块的最大时间戳，
  保证严格大于或等于上一个块时间。一些接口会使用该字段记录的日期，如按照日期获取块列表的接口。

(2) Transaction
    Transaction {
        block_height: int 所在块高度
        block_time: int 所在块时间
        created_at: int 该记录系统处理时间，没有业务含义
        fee: int 该交易的手续费
        hash: string 交易哈希
        inputs: [ 输入
            {
                "prev_addresses": Array<String> 输入地址 
                "prev_position": int 前向交易的输出位置
                "prev_tx_hash": string 前向交易哈希
                "prev_value": int 前向交易输入金额
                "script_asm": string Script Asm
                "script_hex": string Script Hex
                "sequence": int Sequence
            },
        ],
        inputs_count: int 输入数量
        inputs_value: int 输入金额
        is_coinbase: boolean 是否为 coinbase 交易
        lock_time: int lock time
        outputs: [ 输出
            {
                addresses: Array<String> 输出地址
                value: int 输出金额
            }
        ],
        outputs_count: int 输出数量
        outputs_value: int 输出金额
        size: int 交易体积
        version: int 交易版本号
    }
    由于部分交易体积很大，为提高传输效率，所有涉及到交易的接口，均支持交易信息的分级输出，如https://chain.api.btc.com/v3/block/latest/tx?verbose=2。

    verbose，可选，默认为2，选择输出内容等级，含义分别如下：
      等级 1，包含交易信息；
      等级 2，包含等级 1、交易的输入、输出地址与金额；
      等级 3，包含等级 2、交易的输入、输入 script 等信息。
(3) Address
    {
        address: string 地址
        received: int 总接收
        sent: int 总支出
        balance: int 当前余额
        tx_count: int 交易数量
        unconfirmed_tx_count: int 未确认交易数量
        unconfirmed_received: int 未确认总接收
        unconfirmed_sent: int 未确认总支出
        unspent_tx_count: int 未花费交易数量
    }
(4) Unspent
    {
        tx_hash: string 未花费的交易哈希
        tx_output_n: int 未花费在交易输出中的纵向排序*
        tx_output_n2: int 未花费在交易输出中的横向排序*
        value: int 未花费金额
        confirmations: int 确认数
    }

4.API 列表
(1) 区块
  区块信息
    获取单个区块详情。
      GET /block/{xxx}
      xxx可以是：块高度、块哈希、latest - 最新块
      示例
        返回高度为 3 的块           https://chain.api.btc.com/v3/block/3
        返回最新块                  https://chain.api.btc.com/v3/block/latest
        返回最新块、高度为 3 的块    https://chain.api.btc.com/v3/block/latest,3
  区块列表
    根据日期获取交易列表，按照倒序排列。
      GET /block/date/{ymd}
      示例
      获取2015年12月15日的区块列表  https://chain.api.btc.com/v3/block/date/20151215
  区块交易列表
    获取区块交易列表。
    注意：该接口不支持批量查询。
    GET /block/{xxx}/tx
    参数：
    page，可选，默认为1，页码
    pagesize，可选，默认为50，可选范围为1-50，分页大小
    示例
    返回最新块的交易列表  https://chain.api.btc.com/v3/block/latest/tx
    返回单个块的交易列表  https://chain.api.btc.com/v3/block/3/tx

(2) 交易
  交易详情
    获取交易详情。
    GET /tx/{txhash}
    在获取多个交易时，如果对应的交易不存在，则为null。
    示例
    获取单个交易的全部信息  https://chain.api.btc.com/v3/tx/0eab89a271380b09987bcee5258fca91f28df4dadcedf892658b9bc261050d96?verbose=3
    获取多个交易  https://chain.api.btc.com/v3/tx/000000000000000005cb6f6e2f09e84a353ab91756a38aa50fbaf25059f76666,0ba9252660a6a5f291a8983092074f9a1da5f6d1c790518d6550f054e60bbab1
  未确认交易哈希
    获取未确认交易的哈希
    GET /tx/unconfirmed
    示例
      https://chain.api.btc.com/v3/tx/unconfirmed
  未确认交易信息
    获取未确认交易的信息，包括体积和数量。
    GET /tx/unconfirmed/summary
    示例  https://chain.api.btc.com/v3/tx/unconfirmed/summary

(3) 地址
  地址信息
    获取地址的信息。
    GET /address/{address}
    示例
    获取单个地址  https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew
    获取多个地址  https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew,1PErRgFdo757pyyMxFiwB326vuymXC3hev
  地址交易列表
    获取地址的交易列表，按照倒序排列。
    注意：该接口不支持批量查询。
    GET /address/{address}/tx
    参数：
      page，可选，默认为1，页码
      pagesize，可选，默认为50，可选范围为1-50，分页大小
    示例  https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew/tx
  未花费列表
    获取地址的未花费交易列表，按照确认数正序排列。
    注意：该接口不支持批量查询。
    GET /address/{address}/unspent
    示例  https://chain.api.btc.com/v3/address/15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew/unspent

----------------------------------------------------------------


