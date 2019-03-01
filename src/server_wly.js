const Koa = require('koa');
const static = require('koa-static');

// 路由
const routers = require('./api/routers/index_wly.js');

// 创建koa应用
const app = new Koa();//app.context

app.context.myname = 'laoxie'

// 创建静态资源服务
app.use(static('./'));
//引用中间件必须是函数
// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());

// 监听端口
app.listen(1811,()=>{
    console.log('server is running on http://localhost:1811');
})