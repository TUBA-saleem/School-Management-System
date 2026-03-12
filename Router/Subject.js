const express=require("express")
const {CreateSubject,fetchSubject,updateSubject,deleteSubject}=require("../Controller/Subject")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,CreateSubject)
router.get("/",authentication,fetchSubject)
router.put("/:id",authentication,updateSubject)
router.delete("/:id",authentication,deleteSubject)



module.exports=router