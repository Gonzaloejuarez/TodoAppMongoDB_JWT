const {model, Schema} = require('mongoose');


const Task = new Schema({
    title : {type:String, required: true},
    description : {type: String, required:true},
    create_date : {type: Date, default: new Date()},
    todoStatus: { type: Boolean, default: false},
})

Task.methods.seCompleto = function () {
    return !this.todoStatus
}



module.exports = model("Task", Task)