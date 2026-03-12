
const TEACHER = require("../Model/teacher");


async function CreateTeacher(req,res){

   try {

    req.body.school=req.user._id
    const teacher=await TEACHER.create(req.body)

    res.json(teacher)
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }



}

async function fetchTeacher(req,res){

   try {

    const teacher=await TEACHER.find({school:req.user._id})
    res.json(teacher)

    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function updateTeacher(req,res){

   try {

    const teacher=await TEACHER.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(teacher){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(teacher)
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function deleteTeacher(req,res){

   try {

    const teacher=await TEACHER.findByIdAndDelete(req.params.id)
    res.json(teacher)

    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function uploadImage(req,res){

    try {

        await TEACHER.findByIdAndUpdate(req.params.id,{image:req.file.filename})
         res.json({ message: "image uploaded successfully"});

        
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}

async function getImage(req,res){

    try {

        const {image}=await TEACHER.findById(req.params.id,{image:1});
        const root=process.cwd()
        const fullUrl=path.join(root,image)
        
        res.json({ message: "image show successfully",url:fullUrl});
 
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}


module.exports={deleteTeacher,updateTeacher,CreateTeacher,fetchTeacher,getImage,uploadImage}