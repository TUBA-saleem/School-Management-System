const mongoose=require("mongoose")




const ExpenceSchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School",
    require:true,

},
Title:{
   type:String,
   require:true,

},
 amount: {
    type: Number,
    require: true,
  },
 description: {
    type: String,
    
  },
  expenseAt:{
    type:Date,
    require:true,
  }

}, { timestamps: true })




const EXPENSE=mongoose.model("Expense",ExpenseSchema)

module.exports=EXPENSE