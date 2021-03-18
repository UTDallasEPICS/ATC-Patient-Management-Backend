// import our therapist model - we get some handy dandy database utility functions
import {patientModel, therapistModel} from '../models';
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response) => {
    try {
        let therapists = await therapistModel.find({});
        return res.json({ success: true, "data": therapists });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})
.get('/:id', async(req: Request, res: Response) => {
    try {
        let therapists = await therapistModel.findById(req.params.id);
        return res.json({ success: true, "data": therapists });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedTherapist = await new therapistModel(req.body).save();
        return res.json({ success: true, "data": savedTherapist._id });
    }
    catch (err: any) {
        
        return res.json({ success: false, err });
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await therapistModel.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }

})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await therapistModel.findByIdAndDelete(req.params.id);
        return res.json({success: true});
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }
})

.patch('/:id', async(req,res) => {
    try{
        let therapists = await therapistModel.findByIdAndUpdate(req.params.id, req.body,{new:true} );
        return res.json({success: true, "data": therapists});
    }
    catch(err: any){
        return res.json({ success: false, err });
    }
})