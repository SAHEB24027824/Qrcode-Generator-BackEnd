const router=require('express').Router()

const getItems=require('./controllers/getAllItems')
const addItem=require('./controllers/additems')

router.get('/item',getItems);
router.post('/item',addItem);




module.exports=router;