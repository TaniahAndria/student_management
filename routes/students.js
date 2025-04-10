let {Student} = require('../model/schemas');

function getAll(req, res) {
    Student.find().then((students) => {
        res.send(students);
    }).catch((err) => {
        res.send(err);
    });
}


function create(req, res) {
    let student = new Student();
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;

    student.save()
        .then((student) => {
                console.log("Student saved:", student);
                res.json({message: `student saved with id ${student.id}!`});
            }
        ).catch((err) => {
        console.error("Error saving student:", err);    
        res.status(400).json({ error: "cant post student" });
    });
}

module.exports = {getAll, create};
