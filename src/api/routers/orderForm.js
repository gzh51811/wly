const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

// (async ()=>{
//     let res = await db.find("orderForm",{});
//     console.log(res)
// })()
/**
 * ctx
 */
router.put('/',async (ctx,next)=>{
    // 解构
    // let {username,password,mdl} = ctx.request.body;
    let {id}=ctx.query;
    // let all = (page-1)*limit;
    // limit=limit*1;
    // console.log(all,limit);
    let res3 = await db.update('orderForm',{id},{$set:ctx.query});
    // res = res;
    ctx.body=res3;

    // 存入数据库
})
router.get('/',async (ctx,next)=>{
    // 解构
    // let {username,password,mdl} = ctx.request.body;
    let {page,limit}=ctx.query;
    let all = (page-1)*limit;
    limit=limit*1;
    console.log(all,limit);
    let res1 = await db.find('orderForm');
    let res2 = await db.find2('orderForm',{},all,limit);

    // res = res;
    ctx.body={
        "code": 0,
        "msg": "",
        "count": res1.length,
        "data": res2
    }
    // if(res){
    //     ctx.body = {
    //         _id:res._id,
    //         username:res.username,
    //         gender:res.gender,
    //         regtime:res.regtime
    //     }
    // }else{
    //     ctx.body = {
    //         code:100,
    //         msg:'fail'
    //     }
    // }

    

    // 存入数据库
})
router.post('/',async (ctx,next)=>{
    // 解构
    let {id} = ctx.request.body;
    let res = await db.delete('orderForm',{id});
    // console.log(res)
    // res = res;
    ctx.body=res;
    // if(res){
    //     ctx.body = {
    //         _id:res._id,
    //         username:res.username,
    //         gender:res.gender,
    //         regtime:res.regtime
    //     }
    // }else{
    //     ctx.body = {
    //         code:100,
    //         msg:'fail'
    //     }
    // }

    

    // 存入数据库
})

module.exports = router;