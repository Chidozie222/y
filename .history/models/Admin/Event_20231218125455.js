const mongoose = require('mongoose')


const Event = mongoose.Schema(
    {
        StartDate: Date,
        StartTime: String,
    }
)