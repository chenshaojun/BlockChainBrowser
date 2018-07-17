# 安风德 API 手册

提供SWTC区块数据查询，实时获得SWTC网络数据

## 1. 区块

### 1.1  获取区块信息

    GET　/blocks/?type=type&object=op&page=1&p-page=20
    page指定分页的页号，默认为1
    p-page指定每页记录数，默认20

#### type 可以是

- 概要信息 Summary
 1. new ： 最新块概要信息，object指示块数  getNewSummarys(number)
 1. mutil ： 不连续的区块概要信息，object指示块index的列表，逗号分隔
 1. range ： 连续区块概要信息，object指示开始块index和结束块index,逗号分隔
 1. day ： 一天的区块概要信息，object指示日期{YYYYMMDD} {20YYMMDD}前面补20
- 详细信息
 1. hash ： 根据区块块HASH返回详细信息,object为HASH值 getDetail(hash)
 1. height ： 一个块的详细信息,object指示块index getDetail(index)

### 1.2 响应

    {
      "data": {           -- 具体的 API 响应结果
        ......
      },
      "err_no": 0,        -- 0 正常  1 找不到该资源 2 参数错误
      "err_msg": null     -- 错误的具体描述（调试用）
    }
