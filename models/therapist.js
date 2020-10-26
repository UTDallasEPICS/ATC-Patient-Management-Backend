// import our ORM
var mongoose = require('mongoose')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var therapistSchema = new mongoose.Schema({
    firstName:{type: String, default:"None"}, // define the expected properties and some metadata
    lastName:{type: String, default:"None"}, 
    email:{type: String, default:"None"},
    phoneNumber:{type: String, default:"None"}
})
// we can add methods that will exist on all created or retrived instances of this schema
therapistSchema.methods.updateSelf = function(data,callback){
    this.text = data
    this.save(err=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Therapist',therapistSchema)