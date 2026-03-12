
const dotenv=require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")

const Schoolroutes=require("./Router/School")
const Subjectroutes=require("./Router/Subject")
const Classroutes=require("./Router/Class")
const Teacherroutes=require("./Router/Teacher")
const Studentroutes=require("./Router/Student")
const Expenseroutes=require("./Router/Expense")
const Paymentroutes=require("./Router/Expense")








//connected with database
console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("Database connected")})
.catch(err=>console.log("connection error"))



const app=express()

app.use("/School",Schoolroutes)
app.use("/Subject",Subjectroutes)
app.use("/Class",Classroutes)
app.use("/Teacher",Teacherroutes)
app.use("/Student",Studentroutes)
app.use("/Expense",Expenseroutes)
app.use("/Payment",Paymentroutes)






app.listen(4000,()=>{

    console.log("Server running on port 4000")

})