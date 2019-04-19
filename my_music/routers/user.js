const Router = require('koa-router')
let userRouter = new Router();
let userController = require('../controllers/user')
const db = require('../models/db.js')
userRouter.get('/user/register',userController.showRegister)
    
.get('/user/login',async(ctx,next)=>{
    ctx.render('login');
})

module.exports = userRouter;