const express=require("express")
const {createClass,fetchClass,updateClass,deleteClass}=require("../Controller/Class")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,createClass)
router.get("/",authentication,fetchClass)
router.get("/:id",authentication,updateClass)
router.get("/:id",authentication,deleteClass)

module.exports=router