// import our ORM
import pkg from 'mongoose';
const { Schema, Document, model } = pkg

export interface IAdministrator extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isTherapist: boolean;
    patients: string[];
}
// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var adminSchema = new Schema({
    firstName: { type: String, default: "None" }, // define the expected properties and some metadata
    lastName: { type: String, default: "None" },
    email:{type: String, default:"None"},
    phoneNumber:{type: String, default:"None"},
    isTherapist:{type: Boolean, default:false},

    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }],
})
// we can add methods that will exist on all created or retrived instances of this schema
adminSchema.methods.updateSelf = function (data: any, callback: any) {
    this.text = data
    this.save((err: any) => {
        if (err) {
            return callback(err)
        }
        return callback(null)
    })
}

export default model<IAdministrator>('Administrator',adminSchema);
