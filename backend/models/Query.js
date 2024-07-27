const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Student',
        required: true
    },
    heading: {
        type: String,
        default : "Urgent Query"
    },
    query: {
        type: String,
        required : true
    },
    severity: {
        type: int,
        default: 3
    },
    status:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Query', QuerySchema)