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
        type: int,
        rewuired : true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)