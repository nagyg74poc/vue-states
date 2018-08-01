const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let context = {title: 'Express'};
     Object.assign(context, req.query);
     res.locals = {context:context, title: 'Express'};
    res.render('index');
});

module.exports = router;
