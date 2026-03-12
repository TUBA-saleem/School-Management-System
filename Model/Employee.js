const mongoose=require("mongoose")



const EmployeeSchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School"

},
  EmpName: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
  Dob: {
    type: Date,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  religion: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  qualification: {
    type: String,
    require: true,
  },
   address: {
    type: String,
    require: true,
   
  },
  city: {
    type: String,
    require: true,
   
  },
  state: {
    type: String,
    require: true,
   
  },
  country: {
    type: String,
    require: true,
   
  },
  pinCode: {
    type: Number,
   
  },
 
  image: {
    type: String,
   
  },
  Designation:{

    type: String,
    require: true,

  }

}, { timestamps: true })




const EMPLOYEE=mongoose.model("Employee",EmployeeSchema)
module.exports=EMPLOYEE