const mongoose = require('mongoose')


const SubjectMarkField = new mongoose.Schema(
    {
        Class: String,
        SubjectName: String,
        Field: String,
        School
    }
)