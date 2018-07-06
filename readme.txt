功能需求概要及API设计
1.	查询区块概要信息列表（字段：区块号、交易数、区块Hash、区块生成时间，查询结果具有分页功能），该功能查询的结果是一个列表。
   GET　/blocks/:type/:option
   其中:
    type: new 最新块 ; one 单一块 ; multi 多个块 ; range 指定范围块 ; day 某一天的块 ;week 某一周的块 ;month 某一个月的块
    option： 
  （1）最新块的获取 
   GET /blocks/new
   (2) 获取1个块
   GET /blocks/one/:height
   (3) 获取多个块,不连续
   GET /blocks/multi/:heights
   (4) 获取一个范围的块，连续
   GET /blocks/range/:from/:to
   (5) 获取某天的块
   GET /blocks/day/:day
   (5) 获取某周的块
   GET /blocks/week/:day
   (5) 获取某月的块
   GET /blocks/month/:day
2.	根据HASH查询交易的详细，HASH分2种：区块Hash和交易Hash
1)	区块Hash。每个区块均具有一个Hash，根据该Hash，可以查询该区块基本信息（字段：生成时间、区块号、交易数、区块Hash、上一区块Hash，分析区块的头部数据即可得到）；以及其中包含的交易列表（字段：交易类型、交易时间、交易Hash、交易发起人钱包地址、手续费、交易序号，分析每个交易的头部数据即可得到）。
2)	交易Hash。每个交易均具有一个Hash，根据该Hash，可以查询该交易对应的详情（交易类型，挂单类型（只针对创建挂单），交易发起方，交易对方，交易金额，成交金额，区块号，交易费用，是否成功，交易效果）。

3.	根据钱包地址查询该钱包的余额（SWT、Token）以及交易列表（字段：交易类型、交易时间、交易内容、交易对家、交易Hash，查询结果具有分页功能）
