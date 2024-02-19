const express=require('express')
const router=new express.Router()
const vehicleController=require('../Controllers/vehicleController')
const multerConfig = require('../middlewares/multerMiddleware')


// add vehicle
router.post('/vehicles/add', multerConfig.single('photos'), vehicleController.addVehicle);


// export router
module.exports=router