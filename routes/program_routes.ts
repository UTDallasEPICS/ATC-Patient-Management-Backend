import {programModel} from "../models";
import { Router, Request, Response, NextFunction } from 'express';
 
export default Router()
.get('/', async (req: Request, res: Response)=>{
    try{
        let programs = await programModel.find({});
        return res.json({success:true, "data":programs});
    }
    catch(err: any){
        return res.json({success:false, err}); 
    }
})
.get('/:id', async(req: Request, res: Response)=>{
    try {
        let programs = await programModel.findById(req.params.id);
        return res.json({ success: true, "data": programs });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.post('/', async(req: Request, res: Response)=>{
    try {
        let savedProgram = await new programModel(req.body).save();
        return res.json({ success: true, "data": savedProgram._id });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }

})
.delete('/', async(req: Request, res: Response)=>{
    try {
        await programModel.deleteMany({});
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
})
.delete('/:id', async(req: Request, res: Response)=>{
    try {
        await programModel.findByIdAndDelete(req.params.id);
        return res.json({ success: true });
    }
    catch (err: any) {
        return res.json({ success: false, err }); 
    }
});

