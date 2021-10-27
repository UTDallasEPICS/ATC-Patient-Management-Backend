// TODO: these should be generated from program, using it as a template for each session

import {
    getModelForClass,
    prop,
    DocumentType,
    ReturnModelType,
} from "@typegoose/typegoose";
import { Patient, Program, Therapist } from ".";
import { BehaviorInSession } from "./behavior";
class Report {
    @prop()
    public sessionTime: Date;
    @prop()
    public data: object;
    @prop({ ref: () => "Patient" })
    public patient: Patient;
    @prop({ ref: () => "Therapist" })
    public therapist: Therapist;
    @prop()
    public behaviors: BehaviorInSession[];

    public async updateSelf(this: DocumentType<Report>, data: any) {
        return await this.save();
    }

    public static async createFromProgram(
        this: ReturnModelType<typeof Report>,
        program: Program
    ) {
        const report = new Report();
        report.patient = program.patient;
        report.therapist = program.creator;
        report.sessionTime = new Date();
        report.behaviors = program.behaviours.map((behavior) => ({
            ...behavior,
            datatype: "",
            data: {},
            dataclass: "",
        }));
        return report;
    }
}

const reportModel = getModelForClass(Report);

export { reportModel, Report };
