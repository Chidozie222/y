// This page handles the routes for Teacher

// Class information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Teacher = Router()

// calling the schema 
require('../models/Admin/')

// setting up the schema for the Student and Parent information backend
const Teachers = mongoose.model('Teachers')
