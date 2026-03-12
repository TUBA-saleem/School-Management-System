const express=require("express")

const {deleteExpense,updateExpense,fetchExpense,createExpence}=require("../Controller/Expense")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,createExpence)
router.get("/",authentication,fetchExpense)
router.put("/:id",authentication,updateExpense)
router.delete("/:id",authentication,deleteExpense)


module.exports=router

