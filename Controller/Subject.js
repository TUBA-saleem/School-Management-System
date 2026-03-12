const SUBJECT=require("../Model/Subject")


async function CreateSubject(req,res){

   try {

    req.body.school=req.user._id
    const subject=await SUBJECT.create(req.body)

    res.json(subject)
    
   } catch (error) {

     console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }



}

async function fetchSubject(req,res){

   try {

    const subject=await SUBJECT.find({school:req.user._id})
    res.json(subject)

   
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function updateSubject(req,res){

   try {

    const subject=await SUBJECT.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(subject){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(subject)
    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

async function deleteSubject(req,res){

   try {

    const subject=await SUBJECT.findByIdAndDelete(req.params.id)
    res.json(subject)

    
   } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });
    
   }


}

module.exports={deleteSubject,updateSubject,CreateSubject,fetchSubject}