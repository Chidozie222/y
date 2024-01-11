// This page handles the routes for Teacher

// Teacher information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Teacher = Router()

// calling the schema 
require('../models/Admin/teacher')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

Teacher.use(express.static('public'))

// Post all teachers from database

Teacher.post('/student_and_parent', upload.fields([{ name: 'StudentPicture', maxCount: 1 }, { name: 'ParentPicture', maxCount: 1 }]), async (req, res) => {
    const { StudentMale, StudentFemale, StudentOther, StudentFirstName, StudentMiddleName, StudentLastName, StudentDoB, StudentBloodGroup, StudentPhoneNumber, StudentAddress, StudentCity, StudentCountry, StudentZipCode, ParentMale, ParentFemale, ParentOther, ParentFirstName, ParentMiddleName, ParentLastName, ParentUserName, ParentPassword, ParentBloodGroup, ParentEmail, ParentPhone, ParentEducation, ParentProfession, StudentEmail, StudentUsername, StudentPassword, Class, RollNumber, SchoolEmail } = req.body
    
    let StudentPicture = req.files['StudentPicture'][0].filename
    let ParentPicture = req.files['ParentPicture'][0].filename

    let SP = req.files['StudentPicture'][0].size
    let PP = req.files['ParentPicture'][0].size

    let MaxFileSize = 3 * 1024 * 1024 * 1024


    try {
        let UserBySchoolEmail = await .find({ SchoolEmail, StudentFirstName })
        let UserByStudentUsername = await .find({ SchoolEmail, StudentUsername })
        let UserByParentUserName = await .find({ SchoolEmail, ParentUserName })
        let UserByParentEmail = await .find({ SchoolEmail, ParentEmail })
        let UserByStudentEmail = await .find({ SchoolEmail, StudentEmail })

        if (UserBySchoolEmail.length > 0 && UserByStudentUsername.length > 0 && UserByParentUserName.length > 0 && UserByParentEmail.length > 0 && UserByStudentEmail.length > 0) {
            res.send({status: 'error', message: 'User Already exists'})
        } else {
            if (SP > MaxFileSize && PP > MaxFileSize) {
                res.send({status: 'error', message: 'The pictures is greater than 3mb, please reduce it'})
            } else {
                await .create({
                    StudentPicture,
                    StudentMale,
                    StudentFemale,
                    StudentOther,
                    StudentFirstName,
                    StudentMiddleName,
                    StudentLastName,
                    StudentDoB,
                    StudentBloodGroup,
                    StudentPhoneNumber,
                    StudentAddress,
                    StudentCity,
                    StudentCountry, 
                    StudentZipCode, 
                    ParentPicture,
                    ParentMale, 
                    ParentFemale, 
                    ParentOther, 
                    ParentFirstName, 
                    ParentMiddleName,
                    ParentLastName,
                    ParentUserName,
                    ParentPassword,
                    ParentBloodGroup,
                    ParentEmail,
                    ParentPhone,
                    ParentEducation,
                    ParentProfession,
                    StudentEmail,
                    StudentUsername,
                    StudentPassword,
                    Class,
                    RollNumber,
                    SchoolEmail
                })
                res.send({status: 'ok', message: 'Data uploaded successfully'})
             }
        }
    } catch (error) {
        res.send({ status: 'error', message: 'Error in the server' })
    }
})

module.exports = Sapi