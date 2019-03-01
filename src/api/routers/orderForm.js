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
router.get('/',async (ctx,next)=>{
    // 解构
    // let {username,password,mdl} = ctx.request.body;
    let {page,limit}=ctx.query;
    let all = (page-1)*limit;
    limit=limit*1;
    console.log(all,limit);
    // let res = await db.find('orderForm');
    let res = await db.find2('orderForm',{},all,limit);

    // res = res;
    ctx.body={
        "code": 0,
        "msg": "",
        "count": 1000,
        "data": res
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
    id=id*1;
    let res = await db.delete('orderForm',{id});
    // console.log(res)
    // res = res;
    ctx.body=id;
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