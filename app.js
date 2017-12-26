var express = require('express');
var Promise = require('bluebird');
var request = require('request-promise');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path');
var app = express();

app.use(cookieParser());
app.use(bodyParser());

app.set('port',8000);

var requests = [{
    url: 'https://jsonplaceholder.typicode.com/users',
}, {
    url: 'https://jsonplaceholder.typicode.com/posts',

}]; //Iterable input for .map function, array of urls

app.get('/', function (req, res) {
    res.send('HELLO WORLD - Soumyadip');
});

app.get('/authors',function (req,res) {
    Promise.map(requests, function (obj) {
        return request(obj).then(function(body) {
            return JSON.parse(body);
        })
    }).then(function (body) { //body is array JSON fetched from request to above two url
        var postCount = ''
        for(var i in body[0]){ // body[0] is JSON response fetched from request to 1st url, i.e. list of users
            var count = 0;
            for(var j in body[1]){ // body[1] is JSON response fetched from request to 2nd url, i.e. list of posts
                if(body[0][i].id === body[1][j].userId){ // checking if userid in user list equals to the userid in posts list
                    count++; // incrementing count for finding userid of a particular user in the list of posts
                             //counting the posts for each user
                }

            }

              postCount += '<li> <b>' + body[0][i].name + '</b> has <b>' + count + '</b> number of posts </li>';
        }
        res.send(postCount);
    }).catch(function (err) {
        res.send("OOPS! Something Went Wrong");
    });
});

app.get('/setcookie', function (req, res) {
   res.cookie('name','Soumyadip');
   res.cookie('age',19);
   res.send('Cookies have been set');
});

app.get('/getcookie', function (req, res) {
    res.send('Cookie name: name, value: '+ req.cookies.name+ '<br> Cookie name: age, value: '+ req.cookies.age);
});

app.get('/robots.txt',function (req,res) {
   res.status(403).send("YOUR REQUEST IS DENIED");
});

app.get('/html', function (req,res) {
    res.sendFile(path.join(__dirname ,'ui' ,'index.html'));
});

app.get('/input',function (req, res) {
    var endPoint = '/submit';
    var inputBox = `
    <form action="${endPoint}" method="post">
    <label for="box" >Name</label>
    <input type="text" id="box" name="textBox" placeholder="Enter Your Text Here">
    <button type="submit">Submit</button>    
    </form>
    `;
    res.send(inputBox);

});

app.post('/submit', function (req,res) {
    console.log(req.body.textBox);
    res.redirect('/input');
});

app.listen(app.get('port'), function () {
    console.log("APP RUNNING ON http://localhost:" + app.get('port'));
});