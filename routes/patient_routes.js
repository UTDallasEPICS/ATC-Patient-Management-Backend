// import our Patient model - we get some handy dandy database utility functions
var Patient = require('../models/patient.ts')
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// takes an instance of express router as argument and returns it with modifications
module.exports = function(router: any){
    router.get('/', async (req: Request, res: Response)=>{
        // Patient.find will find all patients that match an object we pass in - there is a lot of power here
        // an empty one returns all patients
       /* Patient.find({}, (err, patients)=>{
            if(err){
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":patients});
        })*/
        try{
            let patients = await Patient.find({});
            return res.json({success:true, "data":patients});
        }
        catch(err: any){
            return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
        }
    });

    router.get('/:id', async(req: Request, res: Response)=>{
        /*Patient.findById(req.params.id, (err, patient)=>{
            if(err){           
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":patient});
        })*/
        try {
            let patients = await Patient.findById(req.params.id);
            return res.json({ success: true, "data": patients });
        }
        catch (err: any) {
            return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
        }
    });

    // note the convinient direct method functions
    router.post('/', async(req: Request, res: Response)=>{
        console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
        let patient = new Patient(req.body);

        /*patient.save((err, savedPatient) => {
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true, "data":savedPatient._id});
        })*/
        try {
            let patients = await Patient.save(savedPatient);
            return res.json({ success: true, "data": savedPatient._id });
        }
        catch (err: any) {
            return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
        }

    });

    router.delete('/', async(req: Request, res: Response)=>{
        /*Patient.deleteMany({}, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });*/
        try {
            let patients = await Patient.deleteMany({});
            return res.json({ success: true });
        }
        catch (err: any) {
            return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
        }
    });
    
    router.delete('/:id', async(req: Request, res: Response)=>{
        /*Patient.findByIdAndDelete(req.params.id, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });*/
        try {
            let patients = await Patient.findByIdAndDelete(req.params.id);
            return res.json({ success: true });
        }
        catch (err: any) {
            return res.json({ success: false, err }); // the res.json() function will automagically return a response with the arguments converted to a json string
        }
    });

    return router;
    export default router;

}