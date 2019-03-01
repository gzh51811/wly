const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.get('/',async (ctx,next)=>{

    // console.log(ctx.query)
    // let {page,limit} = ctx.query;
    // let res = await db.find2('goodslist');
    let res = await db.find('goodslist');
    // console.log(res)
    ctx.body = {
    "code": 0,
    "msg": "",
    "count": 1000,
    "data":res
    }
    

    // 存入数据库

})

module.exports = router;