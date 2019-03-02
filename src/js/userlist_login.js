const Router = require('koa-router');

const db = require('./_index');
//创建路由
var router = new Router();


//页面渲染
router.get('/', async (ctx, next) => {
    // 解构
    // let {oa} = ctx.request.body;
    //转换
    // oa = oa*1;
    //查询
    let res = await db.find('user', {oa:0});
    if (res) {
        //把查询到的权限为普通用户的信息返回前端
        ctx.body = {
            "code": 0,
            "msg": "",
            "data": res
        }
    } else {
        ctx.body = {
            code: 100,
            msg: 'fail'
        }
    }
})

//删除功能
router.post('/', async (ctx, next) => {
    // 解构
    //get传来的位置就在query 而post发送过来的在request下body
    let {username} = ctx.request.body;
    //查询删除
    // console.log(username);
    let res = await db.delete('user',{username});
        ctx.body =res;
})
module.exports = router;

