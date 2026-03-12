const express=require("express")
const {CreateTeacher,fetchTeacher,updateTeacher,deleteTeacher,uploadImage,getImage}=require("../Controller/Teacher")

const {authentication}=require("../Middleware/AuthMiddleware")
const {teacherMulter}=require("../Utils/Multer");

const router=express.Router()

router.post("/",authentication,CreateTeacher)
router.get("/",authentication,fetchTeacher)
router.put("/:id",authentication,updateTeacher)
router.delete("/:id",authentication,deleteTeacher)
router.put("/uploadImage/:id",authentication,teacherMulter.single("teacherImageUrl"),uploadImage)
router.get("/image/:id",authentication,getImage)



module.exports=router