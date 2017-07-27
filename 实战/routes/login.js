
var mysql = require('mysql');


/**
 *  验证用户
 * @param uname
 * @param upwd
 * @param callback
 */
function validataUser( uname, upwd, callback )
{

  //创建数据库地址
    var connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '',
        port : '3306',
        database : 'mydb'


    });

    //连接到数据库地址
    connection.connect();


    //
    var sql = 'select * from userinfos where loginname=? and passwd=?';
     // db.userinfos.find({loginname:xxx,passwd:xxx})
    var params = [ uname, upwd ];

    console.log('username : ', uname );
    console.log('userpassword : ', upwd );

    connection.query( sql, params, function( error, result  ){

      var loginRlt = false;

      console.log('oooo')

      console.log( result );
      if( result.length == 1 ){
        loginRlt = true;
      }


      callback( loginRlt );

} );


}



module.exports = function ( request, response, next ) {

  console.log(' enter login module');

  var username = request.query.uname ;
  var userpassword  = request.query.upwd ;


  //验证用户
  validataUser(username,userpassword, function ( loginResult ) {

    if( loginResult )
        {
            //验证成功，进入页面
            response.redirect( '/info');
            return;
        }

        //若验证失败，跳转到登录失败
        response.redirect( '/myerror');

    });



} // end method