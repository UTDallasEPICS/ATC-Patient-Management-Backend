// import our ORM
var mongoose = require('mongoose')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var taskSchema = new mongoose.Schema({
    name:{type: String, default: "None"}, // define the expected properties and some metadata
    description:{type: String, default: "None"},
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }, 
    therapist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist'
    },
    task_results: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskResult'
    }]
})
// we can add methods that will exist on all created or retrived instances of this schema
taskSchema.methods.updateSelf = function(data,callback){
    this.text = data
    this.save(err=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Task',taskSchema)