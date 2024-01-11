// This page handles the routes for Subject Mark Field

// Subject Mark Field information backend code 
const { Router } = require("express");
const mongoose = require('mongoose')

const UpdateSMF = Router()

// calling the schema 
require('../models/Admin/SubjectMarkField')

// setting up the schema for the Subject Mark Field information backend
const SubjectMarkFields = mongoose.model('SubjectMarkField')


UpdateSMF.post('/SubjectMarkField', async (req, res) => {
    const { Class, SubjectName, Field, SchoolEmail } = req.body

    try {
        await SubjectMarkFields.fin
            res.send({ status: 'ok', message: 'Data uploaded successfully' })

    } catch (error) {
        res.send({ status: 'error', message: 'error in the server' })
    }
})

module.exports = UpdateSMF