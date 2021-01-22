const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    create_At: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('timers', TimeSchema);