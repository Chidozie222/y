const { Router } = require("express");
const mongoose = require("mongoose")

let GetSapi = Router()

// calling the schema 
require('../models/Admin/student')

// setting up the schema for the Student and Parent information backend
const SAPI = mongoose.model('SAPI')

GetSapi.get('/GetSapi', async())