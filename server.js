const express=require('express')
const app=express()
const dbFN=require('./db')
const bodyParser=require('body-parser')
const cors=require('cors')


const router=require('./router')


app.listen(2020,()=>{
    console.log("server is running")
    dbFN('mongodb://localhost/qrcode')
})

app.use(cors())
app.use(bodyParser.json())
app.use(router)





