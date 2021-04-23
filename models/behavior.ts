// TODO: we need to pull out all that discussion we had around behaviors, reports, and customizability
import { getModelForClass, prop, DocumentType } from '@typegoose/typegoose';
class Behavior {
  @prop()
  public name: string;
  @prop()
  public description: string;

  public async updateSelf(this: DocumentType<Behavior>, data: any) {
    return await this.save()
  }
}

const behaviorModel = getModelForClass(Behavior)

export {behaviorModel, Behavior}