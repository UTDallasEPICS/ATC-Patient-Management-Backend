// TODO: these should be generated from program, using it as a template for each session

import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient} from ".";
class Session {
  @prop()
  public sessionTime: Date; 
  @prop()
  public data: object;
  @prop({ ref: () => "Patient" })
  public patient: Patient;
 // @prop({ ref: () => "Therapist" })
  //public therapist: Therapist;
  
  public async updateSelf(this: DocumentType<Session>, data: any) {
    return await this.save()
  }
}

const sessionModel = getModelForClass(Session)

export {sessionModel, Session}