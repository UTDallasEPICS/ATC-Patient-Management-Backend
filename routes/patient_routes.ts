import { patientModel, programModel } from "../models";
import { reportModel } from "../models";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const patients = await patientModel.find({});
    return res.json({ success: true, data: patients });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const patients = await patientModel.findById(req.params.id);
    return res.json({ success: true, data: patients });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});
router.get("/program/:id", async (req: Request, res: Response) => {
  try {
    const patient = await patientModel.findById(req.params.id);
    let program = await programModel.find({
      patient,
    });
    if (program.length === 0) {
      program = [await new programModel({ patient }).save()];
    }
    return res.json({
      success: true,
      data: program,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});
router.delete(
  "/program/:patientId/delete/:behaviorId",
  async (req: Request, res: Response) => {
    try {
      const patient = await patientModel.findById(req.params.patientId);
      const program = await programModel.find({ patient });
      program[0].behaviours = program[0].behaviours.filter(
        (behavior) => behavior.id !== req.params.behaviorId
      );
      await program[0].save();
      return res.json({
        success: true,
      });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, error });
    }
  }
);
router.get("/report/:id", async (req: Request, res: Response) => {
  try {
    const report = await reportModel.find({ patientID: req.params.id });
    return res.json({ success: true, data: report });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const savedPatient = await new patientModel(req.body).save();
    return res.json({ success: true, data: savedPatient._id });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const patients = await patientModel.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const patients = await patientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json({ success: true, data: patients });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});

export default router;
