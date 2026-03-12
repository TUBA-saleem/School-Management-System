
const express=require("express")

const {deletePayment,updatePayment,fetchPayment,createPayment}=require("../Controller/Expense")

const {authentication}=require("../Middleware/AuthMiddleware")


const router=express.Router()

router.post("/",authentication,createPayment)
router.get("/",authentication,fetchPayment)
router.put("/:id",authentication,updatePayment)
router.delete("/:id",authentication,deletePayment)


module.exports=router