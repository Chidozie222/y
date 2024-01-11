
// This page handles the routes for Notify

// Notify information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Event = Router()

// calling the schema 
require('../models/Admin/Event')

// setting up the schema for the N information backend
const Events = mongoose.model('Event')
