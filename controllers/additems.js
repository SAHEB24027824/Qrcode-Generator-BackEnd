const Item=require('../models/itemSchema')

async function addItem(req,res){

    try {

        let existingItem= await Item.findOne({itemName:req.body.itemName})
        if(existingItem){
            res.status(400).send({result:"Item Is Exist"})
        }
        else{

            let newItem=new Item({
                itemName:req.body.itemName
            })
    
            let itemAdded=await newItem.save()
    
            if(itemAdded) return res.status(200).send({result:itemAdded})
            res.status(400).send({result:"Bad Request"})
           
        }
        

    } catch (error) {
        return res.status(500).send({result:error.message})
    }


}

module.exports=addItem;