import {patientModel, sessionModel} from "../models";

import { Router, Request, Response } from 'express';
import { Session } from "inspector";
 
export default Router()
/**
 * general get that will return the report based on the data 
 */
//working
.get('/', async (req: Request, res: Response)=>{
    try{
        let reports = await sessionModel.find({});
        return res.json({success:true, "data":reports});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
//working
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let reports = await sessionModel.findById(req.params.id);
        return res.json({ success: true, "data": reports });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
//working 
.get('/patient/:id', async(req:Request,res:Response)=>{
    try{
        let patient = await patientModel.find({patientID: req.params.id});
        return res.json({success:true, "patient":patient});
    }
    catch(err:any){
        return res.json({success:false,err});
    }
})
//working
.post('/', async(req: Request, res: Response)=>{ 
       try {
        let savedReport = await new sessionModel(req.body).save();
        return res.json({ success: true, "data": savedReport._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await sessionModel.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await sessionModel.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
    
})


.patch('/:id', async(req,res) => {
    try{
        let session = await sessionModel.findByIdAndUpdate(req.params.id, req.body,{new:true} );
        return res.json({success: true, "data": session});
    }
    catch(err: any){
        return res.json({ success: false, err });
    }
})

