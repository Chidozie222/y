// sign up backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const signup = Router()

// declaring the mongoose schema for sign up
require('../models/Admin/')

// sign up post route

signup.post('/signup', async(req, res) => {

})