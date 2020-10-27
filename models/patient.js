// import our ORM
var mongoose = require('mongoose')
const therapist = require('./therapist')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var patientSchema = new mongoose.Schema({
    firstName:{type: String, default:"None"}, // define the expected properties and some metadata
    lastName:{type: String, default:"None"}, 
    //email:{type: String, default:"None"}, (will patients be providing there email? Probably not?)
    //phoneNumber:{type: String, default:"None"} (same question as above)
    behaviours: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Behaviour'
    }],
    sessions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
    }],
    therapist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist'
    }
})
// we can add methods that will exist on all created or retrived instances of this schema
patientSchema.methods.updateSelf = function(data,callback){
    this.text = data
    this.save(err=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Patient',patientSchema)