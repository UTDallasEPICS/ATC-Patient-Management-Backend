import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
import {Patient} from ".";
class Employee {
  @prop()
  public firstName: string;
  @prop()
  public lastName: string;
  @prop()
  public email: string;
  @prop()
  public phoneNumber: string;
  @prop()
  public role: string;
  @prop()
  public otherInfo: string;
  @prop()
  public birthday: Date;
  @prop()
  public username: string;
  @prop()
  public password: string;
  
  @prop({ ref: () => "Patient" })
  public patients: Patient[];

  public async updateSelf(this: DocumentType<Employee>, data: any) {
    return await this.save()
  }
}

const employeeModel = getModelForClass(Employee)

export {employeeModel, Employee}