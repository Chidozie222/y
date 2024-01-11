// This page handles the routes for Attendance

// Attendance information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Attendance = Router()

// calling the schema 
require('../models/Admin/Attendance')

// setting up the schema for the Student Mark information backend
const Attendances = mongoose.model('Attendance')
