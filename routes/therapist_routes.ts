// import our Therapist model - we get some handy dandy database utility functions
import {Therapist} from '../models/index.js';
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response) => {
    try {
        let therapists = await Therapist.find({});
        return res.json({ success: true, "data": therapists });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})
.get('/:id', async(req: Request, res: Response) => {
    try {
        let therapists = await Therapist.findById(req.params.id);
        return res.json({ success: true, "data": therapists });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedTherapist = await new Therapist(req.body).save();
        return res.json({ success: true, "data": savedTherapist._id });
    }
    catch (err: any) {
        
        return res.json({ success: false, err });
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await Therapist.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }

})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await Therapist.findByIdAndDelete(req.params.id);
        return res.json({success: true});
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }
})