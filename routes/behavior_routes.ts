// import our Therapist model - we get some handy dandy database utility functions
var Behaviour = require('../models/behaviour')
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// takes an instance of express router as argument and returns it with modifications
module.exports = function(router: any){

    router.get('/', async (req: Request, res: Response) => {
        try {
            let behaviours = await Behaviour.find({});
            return res.json({ success: true, "data": behaviours });
        }
        catch (err: any) {
            // the res.json() function will automagically return a response with the arguments converted to a json string
            return res.json({ success: false, err }); 
        }
    });

    router.get('/:id', async(req: Request, res: Response) => {
        try {
            let behaviours = await Behaviour.findById(req.params.id);
            return res.json({ success: true, "data": behaviours });
        }
        catch (err: any) {
            // the res.json() function will automagically return a response with the arguments converted to a json string
            return res.json({ success: false, err }); 
        }
    });
    // note the convinient direct method functions
    router.post('/', async(req: Request, res: Response)=>{
        console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
        let behaviour = new Behaviour(req.body); // ??

        try {
            let behaviours = await Behaviour.save(savedBehaviour);
            return res.json({ success: true, "data": savedBehaviour._id });
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
            let behaviours = await Behaviour.deleteMany({});
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
            let behaviours = await Behaviour.findByIdAndDelete(req.params.id);
            return res.json({success: true});
        }
        catch (err: any) {
            return res.json({ success: false, err });
        }
    });

    return router;
    export default router;

}