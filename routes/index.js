'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
// This code will accept a method and 2 integers and calculate them and display
router.get('/?', function (req, res) {
    console.log(req.query.method);

    var method = req.query.method;
    var x = (+req.query.x);
    var y = (+req.query.y);

    if (method == 'add')
        res.send('X + Y = ' + (x + y));
    else if (method == 'subtract')
        res.send('X - Y = ' + (x - y));
    else if (method == 'multiply')
        res.send('X x Y = ' + (x * y));
    else if (method == 'divide')
        res.send('X / Y = ' + (x / y));
    else
        res.send('Invalid method type');

    res.render('index', { title: 'Express' });
});

module.exports = router;
