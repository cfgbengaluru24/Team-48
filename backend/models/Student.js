const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique : true
    },
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required : true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        rewuired : true
    },
    email: {
        type: String,
        required: true
    },
    resume: {
        type: String
    },
    github_link: {
        type: String
    },
    linkedin_profile: {
        type: String
    }
})

module.exports = mongoose.model('Student', studentSchema)