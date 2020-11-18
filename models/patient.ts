// import our ORM
import pkg from 'mongoose';
const { Schema, Document, model } = pkg

export interface IPatient extends Document {
    firstName: string;
    lastName: string;
    email: string;
    parentEmail: string;
    parentPhone: string;
    program: string;
    reports: string[];
    therapist: string;
    administrator: string;
}

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var patientSchema = new Schema({
    firstName:{type: String, default:"None"}, // define the expected properties and some metadata
    lastName:{type: String, default:"None"}, 
    email:{type: String, default:"None"},
    parentEmail:{type: String, default:"None"}, //(will patients be providing there email? Probably not?
    parentPhone:{type: String, default:"None"}, //(same question as above)
    

    program: {
        type: Schema.Types.ObjectId,
        ref: 'Program'
    },
    reports: [{
        type: Schema.Types.ObjectId,
        ref: 'Report'
    }],
    therapist: {
        type: Schema.Types.ObjectId,
        ref: 'Therapist'
    },
    administrator: {
        type: Schema.Types.ObjectId,
        ref: 'Administrator'
    }
})
// we can add methods that will exist on all created or retrived instances of this schema
patientSchema.methods.updateSelf = function(data: any,callback: any){
    this.text = data
    this.save((err: any)=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

export default model<IPatient>('Patient',patientSchema);