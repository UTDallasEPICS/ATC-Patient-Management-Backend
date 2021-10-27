// TODO: we need to pull out all that discussion we had around behaviors, reports, and customizability
import { getModelForClass, prop, DocumentType } from "@typegoose/typegoose";
export class Behavior {
    @prop()
    public name: string;
    @prop()
    public description: string;

    public async updateSelf(this: DocumentType<Behavior>, data: any) {
        return await this.save();
    }
}

/**
 * Represent a behavior in the report, in which there is information about the
 * kind of data that therapist wants to keep track of
 *
 */
export interface BehaviorInSession {
    name: string;
    description: string;
    datatype: string;
    dataclass: string;
    data: any;
}

export const behaviorModel = getModelForClass(Behavior);
