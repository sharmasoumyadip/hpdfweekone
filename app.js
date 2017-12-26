var express = require('express');
var Promise = require('bluebird');
var request = require("request-promise");

var app = express();

app.set('port',8000);

var requests = [{
    url: 'https://jsonplaceholder.typicode.com/users',
}, {
    url: 'https://jsonplaceholder.typicode.com/posts',

}];

app.get('/', function (req, res) {
    res.send('HELLO WORLD - Soumyadip');
});

app.get('/authors',function (req,res) {
    Promise.map(requests, function (obj) {
        return request(obj).then(function(body) {
            return JSON.parse(body);
        })
    }).then(function (body) {
        var postCount = ''
        for(var i in body[0]){
            var count = 0;
            for(var j in body[1]){
                if(body[0][i].id === body[1][j].userId){
                    count++
                }

            }

              postCount += '<li> <b>' + body[0][i].name + '</b> has <b>' + count + '</b> number of posts </li>';
        }
        res.send(postCount);
    }).catch(function (err) {
        res.send("OOPS! Something Went Wrong");
    });
});

app.listen(app.get('port'), function () {
    console.log("APP RUNNING ON http://localhost:" + app.get('port'));
})