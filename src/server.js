const Koa = require('koa');
const static = require('koa-static');

// 路由
<<<<<<< HEAD
const routers = require('./js/index');
=======
const routers = require('./api/routers');
>>>>>>> 9e2f493f45c26dbf44bf1257098390a8bb4616cd

// 创建koa应用
const app = new Koa();//app.context

<<<<<<< HEAD
app.context.myname = 'laoxie'
=======
>>>>>>> 9e2f493f45c26dbf44bf1257098390a8bb4616cd

// 创建静态资源服务
app.use(static('./'));
// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());

// 监听端口
<<<<<<< HEAD
app.listen(1811, () => {
=======
app.listen(1811,()=>{
>>>>>>> 9e2f493f45c26dbf44bf1257098390a8bb4616cd
    console.log('server is running on http://localhost:1811');
})