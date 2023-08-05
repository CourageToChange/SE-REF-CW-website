app.post('/exam', (req, res) => {
    let data = {
        module_name: req.body.module_name, 
        num_students: req.body.num_students, 
        issues: req.body.issues, 
        exam_date: req.body.exam_date,
        start_time: req.body.start_time,
        end_time: req.body.end_time
    };

    let sql = 'INSERT INTO exams SET ?';
    let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Exam data added...');
    });
});
