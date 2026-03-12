
const express=require("express")

const {deleteSalary,updateSalary,fetchSalary,createSalary}=require("../Controller/Expense")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,createSalary)
router.get("/",authentication,fetchSalary)
router.put("/:id",authentication,updateSalary)
router.delete("/:id",authentication,deleteSalary)


module.exports=router