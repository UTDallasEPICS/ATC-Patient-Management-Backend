// import our ORM
import { Schema, Document, model } from 'mongoose';

export interface IBehaviour extends Document {
    name: string;
    description: string;
    reports: string[];
}
// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var behaviourSchema = new Schema({
    name:{type: String, default: "None"}, // define the expected properties and some metadata
    description:{type: String, default: "None"},
    reports:[{
        type: Schema.Types.ObjectId,
        ref: 'Program'
    }]
})
// we can add methods that will exist on all created or retrived instances of this schema
behaviourSchema.methods.updateSelf = function(data: any,callback: any){
    this.text = data
    this.save((err: any)=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

export default model<IBehaviour>('Behaviour',behaviourSchema);