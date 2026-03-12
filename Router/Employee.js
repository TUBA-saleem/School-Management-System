const express=require("express")
const {deleteEmployee,updateEmployee,CreateEmployee,fetchEmployee,getImage,uploadImage}=require("../Controller/Teacher")

const {authentication}=require("../Middleware/AuthMiddleware")
const {teacherMulter}=require("../Utils/Multer");

const router=express.Router()

router.post("/",authentication,CreateEmployee)
router.get("/",authentication,fetchEmployee)
router.put("/:id",authentication,updateEmployee)
router.delete("/:id",authentication,deleteEmployee)
router.put("/uploadImage/:id",authentication,teacherMulter.single("teacherImageUrl"),uploadImage)
router.get("/image/:id",authentication,getImage)



module.exports=router