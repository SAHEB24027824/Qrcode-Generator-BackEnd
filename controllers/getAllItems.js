const Item=require('../models/itemSchema')
const Qrcode=require('qrcode')
async function getItems(req,res){

    try {
          
        let items=await Item.find({})

        if(items && items.length>0){
               
        
            for(item in items){

                let url=await Qrcode.toDataURL(items[item].itemName)
                let tempItem={
                    itemName:items[item].itemName,
                    qrcodeUrl:url
                }
                items[item]=tempItem
            }

                return res.status(200).send({result:items})
        } 
        else{
            return res.status(404).send({result:"Items Not FOund"})
        }
        

    } catch (error) {
        return res.status(500).send({result:error.message})
    }


}

module.exports=getItems;