const mongoose=require('mongoose');


const parentalBehaviorSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true
    },
    behaviorScore: {
        type: Number, 
        required: true,
        min: 0, 
        max: 10 
    }
}, {
    timestamps: true 
});

const ParentalBehavior = mongoose.model('ParentalBehavior', parentalBehaviorSchema);

module.exports = ParentalBehavior;
