var get_order_Book = require('./getData_orderBook.js');
var get_ticker = require('./getData_ticker.js');
var get_trades = require('./getData_Trades.js');
var express = require('express');
var app = express();

app.get('/book', get_order_Book.post);
app.get('/ticker', get_ticker.post);
app.get('/trades', get_trades.post);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});