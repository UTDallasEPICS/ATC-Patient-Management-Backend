import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient} from ".";
class Administrator {
  @prop()
  public firstName: string;
  @prop()
  public lastName: string;
  @prop()
  public email: string;
  @prop()
  public phoneNumber: string;
  @prop()
  public isTherapist: boolean;

  @prop({ ref: () => "Patient" })
  public patients: Patient[];

  public async updateSelf(this: DocumentType<Administrator>, data: any) {
    return await this.save()
  }
}

const administratorModel = getModelForClass(Administrator)

export {administratorModel, Administrator}