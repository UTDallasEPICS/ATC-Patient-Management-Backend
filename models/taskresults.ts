// import our ORM
var mongoose = require('mongoose')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var taskSchema = new mongoose.Schema({
    //data: not sure what to do for this one
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
    }
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

module.exports = mongoose.model('TaskResult',taskSchema)