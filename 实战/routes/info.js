
var mysql = require('mysql');



/**
 * 从数据库中获取信息
 */
function getDataFromDB( queryCallback )
{

    var connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '',
        port : '3306',
        database : 'mydb'


    });

    connection.connect();


    console.log('开始查询')

    var querySql = 'select * from userinfos';

    //单词：query(查询) result(结果）
    connection.query( querySql, function (err, result,fields ) {

        if(err){
            console.log(err);
            connection.close();
            return;
        }


        // 将结果值传递过去
        queryCallback( rlt );

    } );



}


module.exports = function( request, response, next ){

    console.log('进入 info 路由回调');


    // 获取数据库的查询结果
    getDataFromDB( function( result ){


        response.render('info', {
            queryRlt : result
        });

    });



};



