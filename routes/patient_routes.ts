import {Patient} from "../models/index.js";
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let patients = await Patient.find({});
        return res.json({success:true, "data":patients});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let patients = await Patient.findById(req.params.id);
        return res.json({ success: true, "data": patients });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedPatient = await new Patient(req.body).save();
        return res.json({ success: true, "data": savedPatient._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        let patients = await Patient.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        let patients = await Patient.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})