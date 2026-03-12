const mongoose=require("mongoose")



const SalarySchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School"

},
  Employee: {
    type: String,
    require: true,
  },
    description: {
    type: String,
    
  },
  salary: {
    type: Number,
    require: true,
  },
  salaryDate: {
    type: Date,
    require: true,
  },

}, { timestamps: true })




const SALARY=mongoose.model("Salary",SalarySchema)

module.exports=SALARY