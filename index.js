// setting up models 
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const home = require('./routes/home')
const signup = require('./routes/signup')
const signin = require('./routes/signin')
const Sapi = require('./routes/Sapi')
const GetSapi = require('./routes/GetSapi')
const Teacher = require('./routes/teacher')
const GetTeacher = require('./routes/GetTeacher')
const classRoom = require('./routes/Class')
const GetClass = require('./routes/GetClass')
const Subject = require('./routes/Subject')
const GetSubject = require('./routes/GetSubject')
const SMF = require('./routes/SMF')
const GetSMF = require('./routes/GetSMF')
const StudentMark = require('./routes/StudentMark')
const GetStudentMark = require('./routes/GetStudentMark')
const Examination = require('./routes/Examination')
const GetExamination = require('./routes/GetExamination')
const Attendance = require('./routes/Attendance')
const GetAttendance = require('./routes/GetAttendance')
const TeacherAttendance = require('./routes/TeacherAttendance')
const GetTeacherAttendance = require('./routes/GetTeacherAttendance')
const GetEvent = require('./routes/GetEvent')
const Event = require('./routes/Event')
const Notify = require('./routes/Notify')
const GetNotify = require('./routes/GetNotify')
const Transportation = require('./routes/Transportation')
const GetTransportation = require('./routes/GetTransportation')
const CsvTeacher = require('./routes/CsvTeacher')
const UpdateTeacher = require('./routes/UpdateTeacher')
const UpdateSapi = require('./routes/UpdateSapi')
const CsvSapi = require('./routes/CsvSapi')
const UpdateClass = require('./routes/UpdateClass')
const UpdateSubject = require('./routes/UpdateSubject')
const UpdateSMF = require('./routes/UpdateSMF')
const UpdateStudentMark = require('./routes/UpdateStudentMark')
const UpdateAttendance = require('./routes/UpdateAttendance')
const UpdateTeacherAttendance = require('./routes/UpdateTeacherAttendance')
const UpdateNotify = require('./routes/UpdateNoftify')
const UpdateTransportation = require('./routes/UpdateTransportation')
const AdminUser = require('./routes/AdminUser')
const StudentAuth = require('./routes/StudentAuth')
const StudentFeatures = require('./routes/studentfeatures')
const ClassView = require('./routes/classview')
const SFFS = require('./routes/SFFS')
const SFFSMF = require('./routes/SFFSMF')
const StudentExam = require('./routes/StudentExam')
const StudentGetAttendance = require('./routes/StudentGetAttendance')
const ParentAuth = require('./routes/ParentAuth')
const TeacherAuth = require('./routes/TeacherAdmin')
const TimeTable = require('./routes/TimeTable')
const GetTimeTable = require('./routes/GetTimeTable')
const UpdateTimeTable = require('./routes/UpdateTimeTable')
const StudentFeatureTimeTable = require('./routes/StudentfeatureTimeTable')
const generalSignIn = require('./routes/GeneralSignin')
const parent = require('./routes/parent')
const updateParent = require('./routes/updateParent')
const getParent = require('./routes/getParent')
const getParentID = require('./routes/getParentByID')
require('dotenv').config()

// initialing the express app
const app = express()
app.use(express.json())

// initialing the middleware for the frontend 
app.use(cors())


// getting routes
app.use(home)
app.use(signup)
app.use(signin)
app.use(Sapi)
app.use(GetSapi)
app.use(Teacher)
app.use(GetTeacher)
app.use(classRoom)
app.use(GetClass)
app.use(Subject)
app.use(GetSubject)
app.use(SMF)
app.use(GetSMF)
app.use(StudentMark)
app.use(GetStudentMark)
app.use(Examination)
app.use(GetExamination)
app.use(Attendance)
app.use(GetAttendance)
app.use(TeacherAttendance)
app.use(GetTeacherAttendance)
app.use(Event)
app.use(GetEvent)
app.use(Notify)
app.use(GetNotify)
app.use(Transportation)
app.use(GetTransportation)
app.use(CsvTeacher)
app.use(UpdateTeacher)
app.use(UpdateSapi)
app.use(CsvSapi)
app.use(UpdateClass)
app.use(UpdateSubject)
app.use(UpdateSMF)
app.use(UpdateStudentMark)
app.use(UpdateAttendance)
app.use(UpdateTeacherAttendance)
app.use(UpdateNotify)
app.use(UpdateTransportation)
app.use(AdminUser)
app.use(StudentAuth)
app.use(StudentFeatures)
app.use(ClassView)
app.use(SFFS)
app.use(SFFSMF)
app.use(StudentExam)
app.use(StudentGetAttendance)
app.use(ParentAuth)
app.use(TeacherAuth)
app.use(TimeTable)
app.use(GetTimeTable)
app.use(UpdateTimeTable)
app.use(StudentFeatureTimeTable)
app.use(generalSignIn)
app.use(parent)
app.use(updateParent)
app.use(getParent)
app.use(getParentID)
// connection to the database configuration 
mongoose.connect(process.env.MONGOURL)
    .then(() => {
    }) 
    .catch((err) => {
    })
    


// Port listener 
app.listen(process.env.PORT)
