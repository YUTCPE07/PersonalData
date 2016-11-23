var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    connectTimeout: 50000,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'webdata'
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'iTopplus',
        link: 'http://www.itopplus.com/'
    });
});

router.post('/searchAll',function(req,res){
    console.log(req)
    var mySinTax = "%";
    var DATASEARCH = mySinTax+(req.body.search)+mySinTax;
    var SQL = 'SELECT * FROM datasave WHERE `name` LIKE ? OR `phone` LIKE ?';
    pool.getConnection(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        } else {
            pool.query(SQL, [DATASEARCH,DATASEARCH], function (err, rows, fields) {
                if (err) throw err;
                res.send(rows);
            });
        }
    });
});

router.post('/selectBetwent', function (req, res) {
    var thestart = req.body.send_start;
    var theend = req.body.send_end;
    console.log("ssssssssssssssssssssssssssselectBetwent",thestart,theend)
    var SQL = 'SELECT * FROM datasave ORDER BY id DESC LIMIT ?,?';
    pool.getConnection(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        } else {
            //pool.query(SQL, function (err, rows, fields) {
            pool.query(SQL, [thestart, theend], function (err, rows, fields) {
                if (err) throw err;
                res.send(rows);
            });
        }
    });
});

router.get('/selectGetAll', function (req, res) {
    pool.getConnection(function (err) {

        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        pool.query('SELECT * FROM datasave', function (err, rows, fields) {
            if (err) throw err;
            res.send(rows);
        });
    });
});

router.get('/selectGetName', function (req, res) {
    pool.getConnection(function (err) {

        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        pool.query('SELECT DISTINCT name FROM datasave', function (err, rows, fields) {
            if (err) throw err;
            res.send(rows);
        });
    });
});

router.post('/updatewebdata', function (req, res) {
    var ID = parseInt(req.body.id);
    var SIN = ' ';
    var NAME = req.body.fname+SIN+req.body.lname;
    var PHONE = req.body.phone;
    var UNIVER = parseInt(req.body.univer);
    var SEX = req.body.sex;
    var BEFORNAME = req.body.beforname;

    var SQL = 'UPDATE datasave SET name = ?, beforname = ?, sex = ?, phone = ?, univer = ? WHERE id = ?';
    pool.getConnection(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        } else {
            pool.query(SQL, [NAME,BEFORNAME,SEX,PHONE,UNIVER,ID], function (err, rows, fields) {
                if (!err) {
                    res.send("Success");
                } else {
                    console.log("Error updatewebdata");
                    res.send("Error");
                }
            });
        }
    });
});

router.post('/addwebdata', function (req, res) {
    console.log(req.body)
    var SIN = ' ';
    var NAME = req.body.fname+SIN+req.body.lname;
    var PHONE = req.body.phone;
    var UNIVER = req.body.univer;
    var SEX = req.body.sex;
    var BEFORNAME = req.body.beforname;

    var SQL = 'INSERT INTO `datasave` (`name`,`sex`,`phone`,`univer`,`beforname`)VALUES(?,?,?,?,?)';
    pool.getConnection(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        } else {
            pool.query(SQL,[NAME,SEX,PHONE,UNIVER,BEFORNAME], function (err, rows, fields) {
                if (!err) {
                    res.send("Success");
                    } else {
                    res.send("Error");
                }
            });
        }
    });
});

router.post('/delwebdata', function(req, res) {
    console.log(req.body)
    var ID = parseInt(req.body.send_id);
    var SQL = 'DELETE FROM datasave WHERE id = ?';
    pool.getConnection(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        else {
            pool.query(SQL,[ID], function(err, rows, fields) {
                if (!err){
                    res.send("Success");
                }else {
                    res.send("Error");
                }
            });
        }
    });
});

module.exports = router;
