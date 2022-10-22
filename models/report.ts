// TODO: these should be generated from program, using it as a template for each session

import {
  getModelForClass,
  prop,
  DocumentType,
  ReturnModelType,
} from "@typegoose/typegoose";
import { Patient, Program, Employee } from ".";
import { BehaviorInSession } from "./behavior";
class Report {
  @prop()
  public sessionTime: Date;
  @prop()
  public data: object;
  @prop({ ref: () => "Patient" })
  public patient: Patient;
  @prop({ ref: () => "Employee" })
  public employee: Employee;
  @prop()
  public behaviors: BehaviorInSession[];

  public async updateSelf(this: DocumentType<Report>, data: any) {
    return await this.save();
  }

  /**
   *
   * Create a new report from a program
   *
   * @param program program from which a new report will be created
   * @returns a templated report that therapists will fill out on the frontend
   */
  public static async createFromProgram(
    this: ReturnModelType<typeof Report>,
    program: Program
  ) {
    const report = new Report();
    report.patient = program.patient;
    // report.therapist = program.creator;
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
