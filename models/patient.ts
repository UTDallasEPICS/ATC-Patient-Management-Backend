import { getModelForClass, prop, DocumentType } from "@typegoose/typegoose";
import { Program, Report, Administrator, Employee } from ".";
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
    @prop()
    public birthday: Date;

    @prop({ ref: () => "Program" })
    public program: Program;
    @prop({ ref: () => "Report" })
    public reports: Report[];
    @prop({ ref: () => "Employee" })
    public employee: Employee;
    @prop({ ref: () => "Administrator" })
    public administrator: Administrator;

    public async updateSelf(this: DocumentType<Patient>, data: any) {
        return await this.save();
    }
}

const patientModel = getModelForClass(Patient);

export { patientModel, Patient };
