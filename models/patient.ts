import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import { Program, Report, Administrator, Therapist } from '.';
class Patient {
  @prop()
  public firstName: string;
  @prop()
  public lastName: string;
  @prop()
  public email: string;
  @prop()
  public parentPhone: string;
  @prop()
  public parentEmail: string;

  @prop({ ref: () => Program })
  public program: Program;
  @prop({ ref: () => Report })
  public reports: Report[];
  @prop({ ref: () => Therapist })
  public therapist: Therapist;
  @prop({ ref: () => Administrator })
  public adminsitrator: Administrator

  public async updateSelf(this: DocumentType<Patient>, data: any) {
    return await this.save()
  }
}

const patientModel = getModelForClass(Patient)

export {patientModel, Patient}