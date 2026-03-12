
const SCHOOL=require("../Model/School")
const jwt = require("jsonwebtoken");
const path=require("path")


async function SignUp(req,res){

    try {

      const { Schoolname,DirName, email, mobileNo, password} = req.body;

    console.log(req.body);

    if (!Schoolname ||!DirName || !email || !mobileNo || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const FindUser = await SCHOOL.findOne({ email });
    if (FindUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await SCHOOL.create({
      Schoolname,
      DirName,
      email,
      mobileNo,
      password,
    });


    return res.status(201).json({
      success: true,
      User: {
        Schoolname: newUser.Schoolname,
        DirName: newUser.DirName,
        email: newUser.email,
        mobileNo: newUser.mobileNo,
        password:newUser.password,
       
      },
      message: "User Register Successfully ",
    });

        
    } catch (error) {

     console.error(error);
    res.status(500).json({ error: "Server error" });
        
    }

}

async function Login(req,res){

    try{

    console.log(req.body);
    const { email, password } = req.body;

    if ( !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const  dbUser = await SCHOOL.matchedPassword(email, password);

    if (!dbUser) {
      return res.status(401).json({ error: "School Not Found" });
    }

    const payload = {
      _id: dbUser._id,
      name: dbUser.name,
      email: dbUser.email,
      mobileNo: dbUser.mobileNo,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(200).json({
      success: true,
      token: token,
      message: "Authorized User",
      User: {
        name: dbUser.name,
        email: dbUser.email,
      },
    });


    } catch (error) {

     console.error(error);
    res.status(500).json({ error: "Server error" });
        
    }

}

async function fetchSchool(req,res){
    try {

     const SCHOOL = await SCHOOL.findById(req.user._id);

    

    if (!SCHOOL) {
      return res.status(400).json({ message: "User not Found" });
    }

    res.status(200).json({
      success: true,
      User: {
        name: SCHOOL.name,
        email: SCHOOL.email,
        mobileNo: SCHOOL.mobileNo,
      },
    });
        
    } catch (error) {
         console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

async function UpdateSchool(req,res){
    try{
    
    const updatedUser = await SCHOOL.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });

    if(!updatedUser){
        res.status(404).json({message:"User not found"})
    }

    console.log(updatedUser);

    res.json({ message: "Profile updated successfully", User: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "profile update Server error" });
  }
}

async function uploadImage(req,res){

    try {

        await SCHOOL.updateOne({_id:req.user._id},{$set:{image:req.file.filename}})
         res.json({ message: "image uploaded successfully"});

        
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}

async function getImage(req,res){

    try {

        const {image}=await SCHOOL.findById({_id:req.user._id},{image:1});
        const root=process.cwd()
        const fullUrl=path.join(root,image)
        
        res.json({ message: "image show successfully",url:fullUrl});
 
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}



module.exports={SignUp,Login,fetchSchool,UpdateSchool,uploadImage,getImage}