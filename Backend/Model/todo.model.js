const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    userId: {
        type: Number
    },
    id: Number,
    title: String,
    isCompleted: Boolean

})

const Todo = mongoose.model("Todo",todoSchema);

module.exports = {
    Todo
}