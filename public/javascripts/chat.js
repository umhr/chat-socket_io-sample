$(function() {

//var socket = io.connect('http://localhost');
//var socket = io.connect('http://192.168.0.6');
var socket = io.connect(ipAddress);
	socket.on('connect', function() { // 2
		console.log('connected');
	});
	
	$('#btn').click(function() {
		var message = $('#message');
		console.log(message);
		socket.emit('msg send', message.val());
	});

	socket.on('msg push', function (msg) {
		console.log(msg);
		var date = new Date();
		$('#list').prepend($('<dt>' + date + '</dt><dd>' + msg + '</dd>'));
	});
	
	socket.on('msg updateDB', function(msg){
		console.log(msg);
	});
});