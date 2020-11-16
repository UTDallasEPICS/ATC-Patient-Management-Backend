// import our Program model - we get some handy dandy database utility functions
var Program = require('../models/program.ts')
import { Router, Request, Response, NextFunction } from 'express';
 
const router = Router();
 
// takes an instance of express router as argument and returns it with modifications
module.exports = function(router: any){
   router.get('/', async (req: Request, res: Response)=>{
       // Program.find will find all programs that match an object we pass in - there is a lot of power here
       // an empty one returns all programs
      /* Program.find({}, (err, programs)=>{
           if(err){
               return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
           }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
           return res.json({success:true, "data":programs});
       })*/
       try{
           let programs = await Program.find({});
           return res.json({success:true, "data":programs});
       }
       catch(err: any){
           return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   router.get('/:id', async(req: Request, res: Response)=>{
       /*Program.findById(req.params.id, (err, program)=>{
           if(err){          
               return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
           }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
           return res.json({success:true, "data":program});
       })*/
       try {
           let programs = await Program.findById(req.params.id);
           return res.json({ success: true, "data": programs });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   // note the convinient direct method functions
   router.post('/', async(req: Request, res: Response)=>{
       console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
       let program = new Program(req.body);
 
       /*program.save((err, savedProgram) => {
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true, "data":savedProgram._id});
       })*/
       try {
           let programs = await Program.save(savedProgram);
           return res.json({ success: true, "data": savedProgram._id });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
 
   });
 
   router.delete('/', async(req: Request, res: Response)=>{
       /*Program.deleteMany({}, (err)=>{
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true});
       });*/
       try {
           let programs = await Program.deleteMany({});
           return res.json({ success: true });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
  
   router.delete('/:id', async(req: Request, res: Response)=>{
       /*Program.findByIdAndDelete(req.params.id, (err)=>{
           if(err){
               return res.json({success:false, err});
           }
           return res.json({success:true});
       });*/
       try {
           let programs = await Program.findByIdAndDelete(req.params.id);
           return res.json({ success: true });
       }
       catch (err: any) {
           return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
       }
   });
 
   return router;
   export default router;
 
}
