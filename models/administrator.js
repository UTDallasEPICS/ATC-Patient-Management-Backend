// import our ORM
var mongoose = require('mongoose')
// const therapist = require('./therapist') ???

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var adminSchema = new mongoose.Schema({
    firstName: { type: String, default: "None" }, // define the expected properties and some metadata
    lastName: { type: String, default: "None" },
    
    patients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    therapist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Therapist'
    }
})
// we can add methods that will exist on all created or retrived instances of this schema
adminSchema.methods.updateSelf = function (data, callback) {
    this.text = data
    this.save(err => {
        if (err) {
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Administrator', adminSchema)// JavaScript source code
