import {Report} from "../models/index.js";
import { Router, Request, Response } from 'express';
 
export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let reports = await Report.find({});
        return res.json({success:true, "data":reports});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let reports = await Report.findById(req.params.id);
        return res.json({ success: true, "data": reports });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{ 
    try {
        let savedReport = await new Report(req.body).save();
        return res.json({ success: true, "data": savedReport._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await Report.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await Report.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})

