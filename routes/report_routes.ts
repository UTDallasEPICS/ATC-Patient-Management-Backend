// import our Report model - we get some handy dandy database utility functions
var Report = require('../models/report.ts')
import { Router, Request, Response, NextFunction } from 'express';
 
const router = Router();
 
// takes an instance of express router as argument and returns it with modifications
module.exports = function(router: any){
   router.get('/', async (req: Request, res: Response)=>{
       // Report.find will find all reports that match an object we pass in - there is a lot of power here
       // an empty one returns all reports
      /* Report.find({}, (err, reports)=>{
           if(err){
               return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
           }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
           return res.json({success:true, "data":reports});
       })*/
       try{
           let reports = await Report.find({});
           return res.json({success:true, "data":reports});
       }
       catch(err: any){
           return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   router.get('/:id', async(req: Request, res: Response)=>{
       /*Report.findById(req.params.id, (err, report)=>{
           if(err){          
               return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
           }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
           return res.json({success:true, "data":report});
       })*/
       try {
           let reports = await Report.findById(req.params.id);
           return res.json({ success: true, "data": reports });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   // note the convinient direct method functions
   router.post('/', async(req: Request, res: Response)=>{
       console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
       let report = new Report(req.body);
 
       /*report.save((err, savedReport) => {
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true, "data":savedReport._id});
       })*/
       try {
           let reports = await Report.save(savedReport);
           return res.json({ success: true, "data": savedReport._id });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
 
   });
 
   router.delete('/', async(req: Request, res: Response)=>{
       /*Report.deleteMany({}, (err)=>{
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true});
       });*/
       try {
           let reports = await Report.deleteMany({});
           return res.json({ success: true });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
  
   router.delete('/:id', async(req: Request, res: Response)=>{
       /*Report.findByIdAndDelete(req.params.id, (err)=>{
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true});
       });*/
       try {
           let reports = await Report.findByIdAndDelete(req.params.id);
           return res.json({ success: true });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   return router;
   export default router;
 
}

