// import our employee model - we get some handy dandy database utility functions
import {patientModel, employeeModel} from '../models';
import { Router, Request, Response } from 'express';

export default Router()
.get('/', async (req: Request, res: Response) => {
    try {
        let employees = await employeeModel.find({});
        return res.json({ success: true, "data": employees });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})
.get('/:id', async(req: Request, res: Response) => {
    try {
        let employees = await employeeModel.findById(req.params.id);
        return res.json({ success: true, "data": employees });
    }
    catch (err: any) {
        
        return res.json({ success: false, err }); 
    }
})

.get('/patient/:id', async(req: Request, res: Response) =>{
    try {
        let patient = await patientModel.find({patientID: req.params.id});
        return res.json({success: true, "data": patient});
    }
    catch (err: any){
        return res.json({success:false, err});
    }
})

.post('/', async(req: Request, res: Response)=>{
    try {
        let savedEmployee = await new employeeModel(req.body).save();
        return res.json({ success: true, "data": savedEmployee._id });
    }
    catch (err: any) {
        
        return res.json({ success: false, err });
    }

})

.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await employeeModel.findByIdAndDelete(req.params.id);
        return res.json({success: true});
    }
    catch (err: any) {
        return res.json({ success: false, err });
    }
})

.patch('/:id', async(req,res) => {
    try{
        let employees = await employeeModel.findByIdAndUpdate(req.params.id, req.body,{new:true} );
        return res.json({success: true, "data": employees});
    }
    catch(err: any){
        return res.json({ success: false, err });
    }
})