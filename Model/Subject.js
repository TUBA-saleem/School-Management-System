const mongoose=require("mongoose")



const SubjectSchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School"

},
  SubjectName: {
    type: String,
    require: true,
  },
  FullMarks: {
    type: Number,
    require: true,
  },

}, { timestamps: true })




const SUBJECT=mongoose.model("Subject",SubjectSchema)

module.exports=SUBJECT