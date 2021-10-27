import {patientModel} from "../models";
import {reportModel} from "../models";
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let patients = await patientModel.find({});
        return res.json({success:true, "data":patients});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let patients = await patientModel.findById(req.params.id);
        return res.json({ success: true, "data": patients });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})

.get('/report/:id', async(req: Request, res: Response) =>{
    try {
        let report = await reportModel.find({patientID: req.params.id});
        return res.json({success: true, "data": report});
    }
    catch (err: any){
        return res.json({success:false, err});
    }
})

.post('/', async(req: Request, res: Response)=>{
    try {
        let savedPatient = await new patientModel(req.body).save();
        return res.json({ success: true, "data": savedPatient._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})

.delete('/:id', async(req: Request, res: Response)=>{
    try {
        let patients = await patientModel.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})

.patch('/:id', async(req,res) => {
    try{
        let patients = await patientModel.findByIdAndUpdate(req.params.id, req.body,{new:true} );
        return res.json({success: true, "data": patients});
    }
    catch(err: any){
        return res.json({ success: false, err });
    }
})