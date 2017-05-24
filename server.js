/**
 * Created by erezya on 21/05/2017.
 */

const express = require('express');
const fs = require('fs');
var app = express();

function logger(req,res,next)
{
    var date = new Date().toString();
    var log = `${date}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n');
    next();
}

app.use(logger);

app.set('view engine', 'hbs');

app.get('/', (req, res) =>
{
    res.send('Hello World');
});

app.listen(3000, ()=>
{
    console.log('Server started on port 3000');
});

