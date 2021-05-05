import {behaviorModel, patientModel} from "../models";
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response) => {
    try {
        let behaviours = await behaviorModel.find({});
        return res.json({ success: true, "data": behaviours });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.get('/:id', async(req: Request, res: Response) => {
    try {
        let behaviours = await behaviorModel.findById(req.params.id);
        return res.json({ success: true, "data": behaviours });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedBehaviour = await new behaviorModel(req.body).save();
        return res.json({ success: true, "data": savedBehaviour._id });
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }

})

.delete('/:id', async(req: Request, res: Response)=>{
    try {
        let behaviours = await behaviorModel.findByIdAndDelete(req.params.id);
        return res.json({success: true});
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }
})

.patch('/:id', async(req,res) => {
    try{
        let behaviours = await behaviorModel.findByIdAndUpdate(req.params.id, req.body,{new:true} );
        return res.json({success: true, "data": behaviours});
    }
    catch(err: any){
        return res.json({ success: false, err });
    }
})