var request = require('request');
var config = require('./config');
var async = require('async');

functions = {
    authorize: function(req, res) {
        var header = config.consumerkey + ':' +config.consumersecret;
        var encheader = new Buffer(header).toString('base64');
        var finalheader = 'Basic ' + encheader;
        
        request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'}, 
        headers: {Authorization: finalheader}}, function(error, response, body) {
            if(error)
            console.log(error);
            else {
                config.bearertoken = JSON.parse(body).access_token;        
                res.json({success: true, data:config.bearertoken});
            }
        })
    },
    getTrends : function(req,res) {
        var searchquery = req.body.query;
        var encsearchquery = encodeURIComponent(searchquery);
        var bearerheader = 'Bearer ' + config.bearertoken;
        var trendTopics = [];
        request.get('https://api.twitter.com/1.1/trends/place.json?id=23424848', {headers: {Authorization: bearerheader}}, function(error, body, response) {
             if(error)
                console.log(error);
             else {
                 let trends = JSON.parse(body.body);
                 if(trends.hasOwnProperty('errors')) {
                    res.json({success: false, data:trends});                     
                 } else {
                     var tweetsUrls = [];
                     for( var i = 0; i < 5; i++) {
                         tweetsUrls.push('https://api.twitter.com/1.1/search/tweets.json?q=' + trends[0].trends[i].query+'&result_type=recent&count=4')
                     }
                    async.map(tweetsUrls, module.exports.getTopicTweets, function (err, result){
                        if (err) return console.log(err);
                        res.json({success: true, data:result});
                    });
                }
            }
        })        
    },

    getTopicTweets : function(query,callback) {
        var bearerheader = 'Bearer ' + config.bearertoken;
        let trends = {};
        request.get(query, {headers: {Authorization: bearerheader}}, function(error, body, res) {
            if(error)
                console.log(error);
            else 
                callback(error,JSON.parse(body.body));
        });
    }
}
module.exports = functions;