// This page handles the routes for Attendance Mark

// Studen Mark information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const StudentMark = Router()

// calling the schema 
require('../models/Admin/StudentMark')

// setting up the schema for the Student Mark information backend
const StudentMarks = mongoose.model('StudentMark')
