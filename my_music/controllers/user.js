const userModel = require('../models/user')

module.exports = {
    showRegister:async(ctx,next)=>{
        let users = await userModel.getUsers()
        console.log(users)
        ctx.render('register')
    }
}