// ANCHOR Adding modules
const mongoose = require('mongoose')

// ANCHOR Creating a mongoose model for Task 
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// ANCHOR Creating a mongoose db model and passing schema 
const Task = mongoose.model('Task', taskSchema )

// ANCHOR Exporting or Routing this to index.js
module.exports = Task