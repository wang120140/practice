const express = require('express');

const app = express();

var Mock = require('mockjs')

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'firstName':Mock.Random.string(7, 20),
        'secondName':Mock.Random.string(7, 20),
        'zhiDingNeiRong':Mock.Random.string(7, 20),
        'zhiDingMuBiaoZhi':  Mock.Random.float(60, 100, 3),
        'LiShiZhiBiaoZhi':Mock.Random.float(60, 100, 3),
        'LiShiWanChengZhi':Mock.Random.float(60, 100, 3)
    }]
})




app.get('/', function (req, res) {
    /**设置响应头允许ajax跨域访问**/
res.setHeader("Access-Control-Allow-Origin","*");
/*星号表示所有的异域请求都可以接受，*/
res.setHeader("Access-Control-Allow-Methods","GET,POST");
res.send("cb("+JSON.stringify(data)+")");
   // res.send(data)
  });
app.listen(3000);
