const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.get('/',async (ctx,next)=>{

    // console.log(ctx.query);//{page:'1',limit:'10'}

    let {page,limit} = ctx.query;
    let num = (page-1)*limit;
    // console.log(num,limit)
    let res = await db.find2('goodslist',null,num,limit*1);
    let res2 = await db.find('goodslist');
    // console.log(res)
    ctx.body = {
    "code": 0,
    "msg": "",
    "count": res2.length,
    "data":res
    }
    

    // 存入数据库

})

router.post('/',async(ctx,next)=>{
    // console.log(ctx.request.body)
    let {id} = ctx.request.body;
    // console.log(id*1)
    id = id*1;
    let res = await db.delete('goodslist',{id})
    ctx.body = null;
})
router.put('/',async(ctx,next)=>{
    // console.log(ctx.request.body)
    let {num} = ctx.request.body;
    let data = [];
    num = JSON.parse(num)

      for(var i=0;i<num.length;i++){
        let obj = {};
        obj.id = num[i]
          data.push(obj)
        }
      
    let res = await db.delete('goodslist',{'$or':data})
    ctx.body = null;
})
module.exports = router;