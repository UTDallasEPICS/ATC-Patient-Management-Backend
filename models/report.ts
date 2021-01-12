// TODO: these should be generated from program, using it as a template for each session

import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient, Therapist} from ".";
class Report {
  @prop()
  public sessionTime: Date;
  @prop()
  public data: object;
  @prop({ ref: () => "Patient" })
  public patient: Patient;
  @prop({ ref: () => "Therapist" })
  public therapist: Therapist;
  
  public async updateSelf(this: DocumentType<Report>, data: any) {
    return await this.save()
  }
}

const reportModel = getModelForClass(Report)

export {reportModel, Report}