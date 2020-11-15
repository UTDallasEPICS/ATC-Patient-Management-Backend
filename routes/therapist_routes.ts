// import our Therapist model - we get some handy dandy database utility functions
var Therapist = require('../models/therapist.ts')
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// takes an instance of express router as argument and returns it with modifications
module.exports = function(router: any){

    router.get('/', async (req: Request, res: Response) => {
        // Therapist.find will find all therapists that match an object we pass in - there is a lot of power here
        // an empty one returns all therapists
        /*Therapist.find({}, (err, therapists)=>{
            
            if(err){
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":therapists});
        })*/
        try {
            let therapists = await Therapist.find({});
            return res.json({ success: true, "data": therapists });
        }
        catch (err: any) {
            // the res.json() function will automagically return a response with the arguments converted to a json string
            return res.json({ success: false, err }); 
        }
    });

    router.get('/:id', async(req: Request, res: Response) => {
        /*Therapist.findById(req.params.id, (err, therapist)=>{
            if(err){           
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":therapist});
        })*/
        try {
            let therapists = await Therapist.findById(req.params.id);
            return res.json({ success: true, "data": therapists });
        }
        catch (err: any) {
            // the res.json() function will automagically return a response with the arguments converted to a json string
            return res.json({ success: false, err }); 
        }
    });
    // note the convinient direct method functions
    router.post('/', async(req: Request, res: Response)=>{
        console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
        let therapist = new Therapist(req.body);

        /*therapist.save((err, savedTherapist) => {
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true, "data":savedTherapist._id});
        })*/
        try {
            let therapists = await Therapist.save(savedTherapist);
            return res.json({ success: true, "data": savedTherapist._id });
        }
        catch (err: any) {
            // the res.json() function will automagically return a response with the arguments converted to a json string
            return res.json({ success: false, err });
        }

    });

    router.delete('/', async(req: Request, res: Response)=>{
        /*Therapist.deleteMany({}, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });*/
        try {
            let therapists = await Therapist.deleteMany({});
            return res.json({ success: true });
        }
        catch (err: any) {
            return res.json({ success: false, err });
        }

    });
    
    router.delete('/:id', async(req: Request, res: Response)=>{
        /*Therapist.findByIdAndDelete(req.params.id, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        })*/
        try {
            let therapists = await Therapist.findByIdAndDelete(req.params.id);
            return res.json({success: true});
        }
        catch (err: any) {
            return res.json({ success: false, err });
        }
    });

    return router;
    export default router;

}