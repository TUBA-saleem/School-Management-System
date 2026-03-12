const mongoose=require("mongoose")
const bcrypt=require("bcrypt")


const SchoolSchema=new mongoose.Schema({

  Schoolname: {
    type: String,
    require: true,
  },
  DirName: {
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
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
   
  },
  estd: {
    type: Number,
   
  },
  address: {
    type: String,
   
  },
  city: {
    type: String,
   
  },
  state: {
    type: String,
   
  },
  country: {
    type: String,
   
  },
  tagline: {
    type: String,
   
  },
  
  regNo: {
    type: String,
   
  },
  pinCode: {
    type: Number,
   
  },

}, { timestamps: true })


SchoolSchema.pre("save", async function () {
if (!this.isModified("password")) return ;

const saltRounds = 10;
this.password = await bcrypt.hash(this.password, saltRounds);

});


SchoolSchema.statics.matchedPassword = async function (email, password) {


  const School = await this.findOne({ email });
  if (!School) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, School.password);
  //const isMatch = password === user.password;

  if (!isMatch) {
    return null;
  }
  return School;
};


const SCHOOL=mongoose.model("School",SchoolSchema)

module.exports=SCHOOL