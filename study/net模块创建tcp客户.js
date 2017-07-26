
var net = require('net');

// 创建连接的对象
var client =  net.connect( 3000, 'localhost' );

/**
 * 监听连接事件
 */
client.on( 'connect', function () {

    // client.write( '' )

});









