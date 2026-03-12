
const EMPLOYEE = require("../Model/Employee");


async function CreateEmployee(req,res){

   try {

    req.body.school=req.user._id
    const employee=await EMPLOYEE.create(req.body)

    res.json(employee)
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }



}

async function fetchEmployee(req,res){

   try {

    const employee=await EMPLOYEE.find({school:req.user._id})
    res.json(employee)

    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function updateEmployee(req,res){

   try {

    const employee=await EMPLOYEE.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(employee){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(employee)
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function deleteEmployee(req,res){

   try {

    const employee=await EMPLOYEE.findByIdAndDelete(req.params.id)
    res.json(employee)

    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function uploadImage(req,res){

    try {

        await EMPLOYEE.findByIdAndUpdate(req.params.id,{image:req.file.filename})
         res.json({ message: "image uploaded successfully"});

        
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}

async function getImage(req,res){

    try {

        const {image}=await EMPLOYEE.findById(req.params.id,{image:1});
        const root=process.cwd()
        const fullUrl=path.join(root,image)
        
        res.json({ message: "image show successfully",url:fullUrl});
 
        
    } catch (error) {
         res.status(500).json({ message: "image upload Server error" });
    }


}


module.exports={deleteEmployee,updateEmployee,CreateEmployee,fetchEmployee,getImage,uploadImage}