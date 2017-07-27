//引入数据库
var mysql = require('mysql');

//从数据库中删除数据
function deleteDataFromDB(id, callback )
{

    //连接指定数据库位置
    var connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '',
        port : '3306',
        database : 'test'
    });

    //连接到数据库
    connection.connect();

    //打印日志，记录删除了哪个ID里的东西
    var sql = 'delete from userinfos where id = ' + id;
    console.log( sql );
    connection.query( sql, function (err, result ) {
        if( err ){
            connection.close();
            return;
        }

        callback(result);
    });
}


module.exports = function( request, response,next  ){
    //记录请求查询的id为要删除的id
    var dUserID = request.query.userid;
    console.log( "要删除的ID:" + dUserID );
    //使用删除命令删除指定id
    deleteDataFromDB( dUserID, function () {
        var contentValue = "用户" + dUserID + "已被删除";
        response.render( 'deleteRlt', {
            content : contentValue
        });
    });
};