import {reportModel} from "../models";
import { Router, Request, Response } from 'express';
 
export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let reports = await reportModel.find({});
        return res.json({success:true, "data":reports});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let reports = await reportModel.findById(req.params.id);
        return res.json({ success: true, "data": reports });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{ 
    try {
        let savedReport = await new reportModel(req.body).save();
        return res.json({ success: true, "data": savedReport._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})

.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await reportModel.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})

