// import our ORM
var mongoose = require('mongoose')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var sessionSchema = new mongoose.Schema({
    date:{type: String, default: Date.now}, // define the expected properties and some metadata
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
sessionSchema.methods.updateSelf = function(data,callback){
    this.text = data
    this.save(err=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Session',sessionSchema)