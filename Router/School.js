const express=require("express")
const {SignUp,Login,fetchSchool,UpdateSchool,uploadImage,getImage} =require("../Controller/School")

const {authentication}=require("../Middleware/AuthMiddleware")

const {upload}=require("../Utils/Multer");
const router=express.Router()

router.post("/SignUp",SignUp)
router.post("/Login",Login)
router.get("/",authentication,fetchSchool)
router.put("/",authentication,UpdateSchool)
router.put("/uploadImage",authentication,upload.single("profileImageUrl"),uploadImage)
router.get("/image",getImage)








module.exports=router
