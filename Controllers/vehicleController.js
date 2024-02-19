const vehicles=require('../Models/vehicleSchema')

// add vehicle
exports.addVehicle=async(req,res)=>{
    console.log("Inside ad vehicle function");
    const photos=req.file.filename
    const {name,model,number,year,type,items,issues,date,time}=req.body
    
    try{
        const newVehicle=new vehicles({
            name,model,number,year,type,items,issues,photos,date,time
        })
        await newVehicle.save()
        res.status(200).json(newVehicle)
    }
    catch (err){
        res.status(401).json(err)
    }
}             