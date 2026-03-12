const CLASS=require("../Model/Class")

async function createClass(req,res){

    try {

        req.body.school=req.user._id

        const clas=await CLASS.create(req.body);

        res.json(clas)
        
    } catch (error) {

         res.status(500).json({ message: error.message});
        
    }



}


async function fetchClass(req,res){

    try {

      const classs=  await CLASS.find({school:req.user._id})

      res.json(classs)

        
    } catch (error) {

             res.status(500).json({ message: error.message});
        
    }
}


async function updateClass(req,res){

    try {

      const classs=  await CLASS.findByIdAndUpdate(req.params.id,req.body,{new:true})
      if(!classs){

        res.status(404).json({message:"class not found with id "})
      }
      res.json(classs)
        
    } catch (error) {

      res.status(500).json({ message: error.message });
        
    }
}


async function deleteClass(req,res){

    try {

      const classs=  await CLASS.findByIdAndDelete(req.params.id)
      if(!classs){

        res.status(404).json({message:"class not found with id "})
      }
      res.json(classs)
        
    } catch (error) {

      res.status(500).json({ message: error.message });
        
    }
}



module.exports={createClass,fetchClass,updateClass,deleteClass}