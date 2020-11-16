// import our ORM
import { Schema, Document, model } from 'mongoose';

export interface IProgram extends Document {
    patient: string;
    description: string;
    behaviours: string[];
}
// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var programSchema = new Schema({
    description:{type: String, default: "None"},
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    behaviours:[{
        type: Schema.Types.ObjectId,
        ref: 'Behaviour'
    }]
})
// we can add methods that will exist on all created or retrived instances of this schema
programSchema.methods.updateSelf = function(data: any,callback: any){
    this.text = data
    this.save((err: any)=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

export default model<IProgram>('Program',programSchema);