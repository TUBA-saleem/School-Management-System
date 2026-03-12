const mongoose=require("mongoose")
const {getSession}=require("../Utils/get-session")




const StudentSchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School",
    require:true,

},
  StudentName: {
    type: String,
    require: true,
  },
  FatherName: {
    type: String,
    require: true,
  },
  MotherName: {
    type: String,
    require: true,
  },
  religion: {
    type: String,
    require: true,
  },
   mobileNo: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
   section: {
    type:String,
    require:true
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
  previousSchool:{
    type:String
  },
  
  session: {
    type:String,
           
  },
  roll:{
    type:Number,
  }


    
  

}, { timestamps: true })

StudentSchema.pre("save", async function () {

    const admission=await this.model().findOne({class:this.class,section:this.section}).sort({roll:-1})
    if(admission){
        
        this.roll=admission.roll+1;
    }
    else{

        this.roll=1;

    }


    

});

StudentSchema.pre("save",  function () {

    this.session=getSession()

});




const STUDENT=mongoose.model("Student",StudentSchema)

module.exports=STUDENT