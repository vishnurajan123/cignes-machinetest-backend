const mongoose=require('mongoose')

const vehicleSchema=new mongoose.Schema({

    name:{
        type:String
    },
    model:{
        type:String
    },
    number:{
        type:String
    },
    year:{
        type:String
    },
    type:{
        type:String
    },
    items:{
        type:Array
    },
    issues:{
        type:Array
    },
    photos:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    }

})

const vehicles=mongoose.model("vehicles",vehicleSchema)
module.exports=vehicles