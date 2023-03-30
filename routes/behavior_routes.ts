import { Behavior, behaviorModel } from "../models";
import { Router, Request, Response } from "express";

const router = Router();
/**
 *
 * Fetch all templated behaviors
 *
 */
router.get("/", async (req: Request, res: Response) => {
    try {
        let behaviours = await behaviorModel.find({});
        return (res as any).json({ success: true, data: behaviours });
    } catch (err: any) {
        return (res as any).json({ success: false, err });
    }
});

/**
 *
 * Fetch a templated behavior with given id
 *
 */
router.get(
    "/:id",
    async (req: Request<{ id: string }, {}, Behavior, {}>, res: Response) => {
        try {
            let behaviours = await behaviorModel.findById(req.params.id);
            return res.json({ success: true, data: behaviours });
        } catch (err: any) {
            return res.json({ success: false, err });
        }
    }
);

/**
 *
 * Save a new templated behavior into database
 *
 */
router.post("/", async (req: Request<{}, {}, Behavior, {}>, res: Response) => {
    try {
        let savedBehaviour = await new behaviorModel(req.body).save();
        return (res as any).json({ success: true, data: savedBehaviour._id });
    } catch (err: any) {
        return (res as any).json({ success: false, err });
    }
});

/**
 *
 * Remove a templated behavior with given ID
 *
 *
 */
router.delete(
    "/:id",
    async (req: Request<{ id: string }, {}, Behavior, {}>, res: Response) => {
        try {
            await behaviorModel.findByIdAndDelete(req.params.id);
            return (res as any).json({ success: true });
        } catch (err: any) {
            return (res as any).json({ success: false, err });
        }
    }
);

/**
 *
 * Make adjustments to templated behavior with given ID
 *
 *
 */
router.patch(
    "/:id",
    async (req: Request<{ id: string }, {}, Behavior, {}>, res) => {
        try {
            let behaviours = await behaviorModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            return (res as any).json({ success: true, data: behaviours });
        } catch (err: any) {
            return (res as any).json({ success: false, err });
        }
    }
);

export default router;
