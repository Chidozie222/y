const mongoose = require('mongoose')


const Auth = new mongoose.Schema(
    {
        StudentPicture: String,
        StudentMale: Boolean,
        StudentFemale: Boolean,
        StudentOther: B
    },
    {
        collection: "Admin_User"
    }
)


mongoose.model("Auth", Auth)