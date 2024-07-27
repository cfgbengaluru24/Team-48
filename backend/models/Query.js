const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    heading: {
        type: String,
        default : "Urgent Query"
    },
    query: {
        type: [String],
        required : true
    },
    severity: {
        type: int,
        default: 3
    },
    status:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Query', querySchema)