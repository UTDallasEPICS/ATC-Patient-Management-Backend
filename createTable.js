//Importing Mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose


//Creating a database
await mongoose.connect('mongodb://localhost/ATC-Database');

//Creating Therapist Model
const therapistSchema = new Schema({
    firstName:{type: String},
    lastName:{type: String},
    email:{type: String},
    username:{type: String, default: 'user'},
    password:{type: String, default: 'password'},
    phoneNumber:{type: String},
    isAdmin:{type: Boolean}
});

const therapistModel = mongoose.model('therapists', therapistSchema);

const therapistTable = new therapistModel();