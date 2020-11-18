import {Behavior} from "../models/index.js";
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response) => {
    try {
        let behaviours = await Behavior.find({});
        return res.json({ success: true, "data": behaviours });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.get('/:id', async(req: Request, res: Response) => {
    try {
        let behaviours = await Behavior.findById(req.params.id);
        return res.json({ success: true, "data": behaviours });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedBehaviour = await new Behavior(req.body).save();
        return res.json({ success: true, "data": savedBehaviour._id });
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        let behaviours = await Behavior.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }

})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        let behaviours = await Behavior.findByIdAndDelete(req.params.id);
        return res.json({success: true});
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }
});
