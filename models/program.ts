// TODO: customizability concerns! imported behaviors shoudl actualyl behave like templates,
// with the actual data being a customizable JSON blob
// keep in mind that we will also need a deprecation mechanism so that completed/edited behaviors
// are still avaialble for data analysis but are not used for making new reports
import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient, Behavior} from "."
class Program {
  @prop()
  public name: string;
  @prop()
  public description: string;
  @prop({ ref: () => "Patient" })
  public patient: Patient;
  @prop({ ref: () => "Behavior" })
  public behaviours: Behavior[];

  public async updateSelf(this: DocumentType<Program>, data: any) {
    return await this.save()
  }
}

const programModel = getModelForClass(Program)

export {programModel, Program}