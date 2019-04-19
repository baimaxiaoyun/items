const Router = require('koa-router')
let musicRouter = new Router();

musicRouter.get('/music/index',async(ctx,next)=>{
    ctx.render('index')
})
.get('/music/add',async(ctx,next)=>{
    ctx.render('add')
})
.get('/music/edit-music?id=1',async(ctx,next)=>{
    ctx.render('edit')
})

module.exports = musicRouter