const mysql = require('mysql');

// 创建一个连接池c
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'byb1'
});



const db = {}
db.q = function (sql, params) {
    return new Promise((resolve,reject)=> {
        // 取出连接
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return
            }
            connection.query(sql, params, function (error, results, fields) {
                console.log(`${sql}=>${params}`);
                //释放连接
                connection.release();
                if(error){
                    reject(err)
                    return
                }
                resolve(results);
            });
        });
    })
}

module.exports = db