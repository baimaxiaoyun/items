const db = require('./db.js')
module.exports ={
    getUsers:async()=>{
       let users = await db.q('select * from users',[])
        return users;
    }
}