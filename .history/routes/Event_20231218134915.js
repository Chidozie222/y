// This page handles the routes for Event

// Event information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const Event = Router()

// calling the schema 
require('../models/Admin/Event')

// setting up the schema for the Event information backend
const Events = mongoose.model('Event')


// Event route
Event.post('/Event', async (req, res) => {
    const {  }
})
