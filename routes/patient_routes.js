// import our Patient model - we get some handy dandy database utility functions
var Patient = require('../models/patient.js')
// takes an instance of express router as argument and returns it with modifications
module.exports = function(router){
    router.get('/',(req,res)=>{
        // Patient.find will find all therapists that match an object we pass in - there is a lot of power here
        // an empty one returns all therapists
        Patient.find({}, (err, therapists)=>{
            if(err){
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":therapists});
        })
    });

    router.get('/:id',(req,res)=>{

        Patient.findById(req.params.id, (err, therapist)=>{
            if(err){           
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":therapist});
        })
    });
    // note the convinient direct method functions
    router.post('/',(req,res)=>{
        console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
        let therapist = new Patient(req.body);
        therapist.save((err, savedPatient) => {
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true, "data":savedPatient._id});
        })
    });

    router.delete('/', (req,res)=>{
        Patient.deleteMany({}, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });
    });
    
    router.delete('/:id',(req,res)=>{
        Patient.findByIdAndDelete(req.params.id, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });
    });

    return router
}