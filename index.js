require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connection')

const EmpServer=express()

EmpServer.use(cors())
EmpServer.use(express.json())
EmpServer.use(router)
EmpServer.use('/uploads',express.static('./uploads'))


const PORT=4000 || process.env.PORT
EmpServer.listen(PORT,()=>{
    console.log(`Garage server started at port : ${PORT} and waitinf for client requests`);
});
EmpServer.get('/',(req,res)=>{
    res.send(`<h1>Garage server started and waiting for client requests</h1>`)
})
