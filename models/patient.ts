import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import { Session } from 'inspector';
import { Program, Administrator, Therapist } from '.';
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

  @prop({ ref: () => "Program" })
  public program: Program;
  @prop({ ref: () => "session" })
  public session: Session[];
  @prop({ ref: () => "Therapist" })
  public therapist: Therapist;
  @prop({ ref: () => "Administrator" })
  public administrator: Administrator

  public async updateSelf(this: DocumentType<Patient>, data: any) {
    return await this.save()
  }
}

const patientModel = getModelForClass(Patient)

export {patientModel, Patient}  