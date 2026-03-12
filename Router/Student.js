const express=require("express")
const {Admission,fetchStudent,deleteStudent,updateStudent}=require("../Controller/Student")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,Admission)
router.get("/",authentication,fetchStudent)
router.put("/:id",authentication,updateStudent)
router.delete("/:id",authentication,deleteStudent)


module.exports=router