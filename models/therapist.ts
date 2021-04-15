import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient} from ".";
class Therapist {
  @prop()
  public firstName: string;
  @prop()
  public lastName: string;
  @prop()
  public email: string;
  @prop()
  public username: string;
  @prop()
  public password: string;
  @prop()
  public phoneNumber: string;
  @prop()
  public isAdmin: boolean; // TODO: we may actually rename this employees, get rid of adminstrator type, and reference isTherapist and isAdmin props

  @prop({ ref: () => "Patient" })
  public patients: Patient[];

  public async updateSelf(this: DocumentType<Therapist>, data: any) {
    return await this.save()
  }
}

const therapistModel = getModelForClass(Therapist)

export {therapistModel, Therapist}