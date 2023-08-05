const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');  // <-- You need to add this line to require the 'path' module.

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MpRQ5555',
    database : 'invigilator'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...');
});

// Init app
const app = express();

app.set('view engine', 'ejs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static Files Middleware
app.use(express.static('/Users/nobin/Desktop/SE REF CW website/public'));
app.use('/public', express.static(__dirname + '/public'));


// Post exam data route
app.post('/exam', (req, res) => {
    console.log(req.body)
    let sql = 'INSERT INTO exams SET ?';
    let newExam = {
        module_name: req.body.moduleName,
        exam_name: req.body.examName,
        exam_date: req.body.examDate,
        time_zone: req.body.timeZone,
        start_time: req.body.startTime,
        end_time: req.body.endTime,
        rules: req.body.examRules
    };
    db.query(sql, newExam, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('New exam added...');
    });
});



// Add a route for the homepage ('/')
app.get('/api/exams/:id', (req, res) => {
    let sql = 'SELECT * FROM exams WHERE id = ?'; 
    db.query(sql, [req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result[0]); // send back the first (and only) result
    });
});
app.get('/api/exams', (req, res) => {
    let sql = 'SELECT * FROM exams'; 
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});
app.get('/add_exam', (req, res) => {
    res.sendFile('/Users/nobin/Desktop/SE REF CW website/public/html/add_exam.html');
});


app.delete('/api/exams/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'DELETE FROM exams WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error deleting the exam.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Exam not found.' });
        }
        res.json({ success: true, message: 'Exam deleted.' });
    });
});




// Server listening
app.listen(3001, () => {
    console.log('Server started on port 3001');
});
