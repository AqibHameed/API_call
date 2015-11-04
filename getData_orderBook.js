var request = require("request")
module.exports = {
    post: function (req, res) {
        var url = "https://api.blinktrade.com/api/v1/PKR/orderbook"
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                res.send(body);
            }
        })
    }
}