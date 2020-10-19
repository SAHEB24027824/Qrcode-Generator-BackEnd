const mongoose=require('mongoose');


async function dbFN(dbString){

    try {
        let result=await mongoose.connect(dbString ,{useNewUrlParser:true,useUnifiedTopology: true })
        if(result){
            console.log("Database connected")
        }
    } catch (error) {
        console.log(error.message)
    }
}


module.exports=dbFN;
