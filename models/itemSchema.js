const mongoose=require('mongoose');

const itemSchema=mongoose.Schema({
    itemName:{
        type:String
    }
})

const Item=mongoose.model('Item',itemSchema)

module.exports=Item;
