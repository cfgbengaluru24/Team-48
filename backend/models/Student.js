const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique : true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    college: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
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