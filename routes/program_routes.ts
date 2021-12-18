import { patientModel, programModel } from "../models";
import { Router, Request, Response } from "express";

const router = Router();
router.get("/", async (req: Request, res: Response) => {
  try {
    let programs = await programModel.find({});
    return res.json({ success: true, data: programs });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    let programs = await programModel.findById(req.params.id);
    return res.json({ success: true, data: programs });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});
router.post("/", async (req: Request, res: Response) => {
  try {
    const patient = await patientModel.findById(req.body.studentId);
    if (!patient) {
      return res.json({
        success: false,
        err: {
          msg: "User not found",
        },
      });
    }
    let program = await programModel.findOrCreate(patient);
    const { name, description, datatype } = req.body;
    await program.addBehavior({ name, description, datatype });
    await program.save();
    return res.json({ success: true, data: program });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await programModel.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (err: any) {
    return res.json({ success: false, err });
  }
});

export default router;
