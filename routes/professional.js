const express =require('express').Router();
const profcontroller=require('../controllers/professional')

express.get('/',profcontroller.exportUser);

module.exports=express;
