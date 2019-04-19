const koa = require('koa');
const bodyparser = require('koa-bodyparser')
const render = require('koa-art-template')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const session = require('koa-session')
const formidable = require('koa-formidable')
const captchapng = require('captchapng2')

// 导入自定义路由中间件
const userRouter = require('./routers/user')
const musicRouter = require('./routers/music')
let app = new koa()

render(app,{
    // 模板路径
    root: path.join(__dirname, 'views'),
    // 模板后缀名字
    extname: '.html',
    //  开发环境配置
    debug: process.env.NODE_ENV !== 'production'
})

let router = new Router();



app.use(async(ctx,next)=>{
    if(ctx.url.startsWith('/public')){
        ctx.url = ctx.url.replace('/public','')
    }
    await next()
})
//处理静态资源
app.use(require('koa-static')(path.resolve('./public')))

app.use(userRouter.routes())
app.use(musicRouter.routes())
// 处理405 501方法不匹配 为实现
app.use(userRouter.allowedMethods())
app.listen(3000,()=>{
    console.log('服务已启动')
})



