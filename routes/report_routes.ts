import { programModel, reportModel } from "../models";
import { Router, Request, Response } from "express";

export default Router()
    .get("/", async (req: Request, res: Response) => {
        try {
            let reports = await reportModel.find({});
            return res.json({ success: true, data: reports });
        } catch (err: any) {
            return res.json({ success: false, err });
        }
    })
    .get("/:id", async (req: Request, res: Response) => {
        try {
            let reports = await reportModel.findById(req.params.id);
            return res.json({ success: true, data: reports });
        } catch (err: any) {
            return res.json({ success: false, err });
        }
    })
    .get(
        "/generate/:programId",
        async (
            req: Request<{ programId: string }, {}, {}, {}>,
            res: Response
        ) => {
            const { programId } = req.params;
            const program = await programModel.findById(programId);

            const newReport = await reportModel.createFromProgram(program);
            res.json(newReport);
        }
    )
    .post("/", async (req: Request, res: Response) => {
        try {
            let savedReport = await new reportModel(req.body).save();
            return res.json({ success: true, data: savedReport._id });
        } catch (err: any) {
            return res.json({ success: false, err });
        }
    })

    .delete("/:id", async (req: Request, res: Response) => {
        try {
            await reportModel.findByIdAndDelete(req.params.id);
            return res.json({ success: true });
        } catch (err: any) {
            return res.json({ success: false, err });
        }
    });
