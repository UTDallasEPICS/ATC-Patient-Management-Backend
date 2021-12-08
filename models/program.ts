// TODO: customizability concerns! imported behaviors shoudl actualyl behave like templates,
// with the actual data being a customizable JSON blob
// keep in mind that we will also need a deprecation mechanism so that completed/edited behaviors
// are still avaialble for data analysis but are not used for making new reports
import {
  getModelForClass,
  prop,
  DocumentType,
  ReturnModelType,
} from "@typegoose/typegoose";
import { randomBytes } from "crypto";
import { Patient } from ".";
import { WithID } from "../types";
import { IBehavior } from "./behavior";

class Program {
  @prop({ ref: () => "Patient" })
  public patient: Patient;
  @prop()
  public behaviours: WithID<IBehavior>[];

  public async updateSelf(this: DocumentType<Program>, data: any) {
    return await this.save();
  }

  public static async findOrCreate(
    this: ReturnModelType<typeof Program>,
    patient: DocumentType<Patient>
  ) {
    let program = await this.findOne({ patient });
    if (!program) {
      program = await new programModel({
        patient,
        behaviours: [],
      }).save();
    }
    return program;
  }

  /**
   *
   * Fetch a behavior template with given ID and then add its copy to the current program
   *
   * @param behaviorId id of behavior template that needs to be added
   */
  public async addBehavior(this: DocumentType<Program>, behavior: IBehavior) {
    this.behaviours.push({
      ...behavior,
      id: randomBytes(16).toString("hex"),
    });
    await this.save();
  }
}

const programModel = getModelForClass(Program);

export { programModel, Program };
