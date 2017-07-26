/**
 * Created by longlingxiu on 15/3/18.
 */


var  net  = require('net'); // 导入net模块，因为net模块中包含tcp、udp

// 创建server服务
var server = net.createServer(function ( conn ) {

    console.log('创建成功..')
    conn.write('\n  hello  buddy \n');
    
});


server.listen( 3000, function(){

    console.log( '正在监听' );


});


