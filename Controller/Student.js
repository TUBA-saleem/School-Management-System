
const STUDENT=require("../Model/Student")

async function Admission(req,res){

    try {

        req.body.school=req.user._id

        const Student=await STUDENT.create(req.body)

        res.json(Student)
        
    } catch (error) {

      res.status(500).json({ error: error.message });
  
    }
}

async function fetchStudent(req,res){

    try {
        
        const admission=[]
        const session=req.query.session

        if(session){

        admission=await STUDENT.find({school:req.user._id,session:session}).sort({createdAt})

        }else{

        admission=await STUDENT.find(req.user._id).sort({createdAt})

        }
        res.json(admission)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function updateStudent(req,res){

    try {
         const student=await SUBJECT.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(student){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(student)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function deleteStudent(req,res){

    try {
       

        const subject=await SUBJECT.findByIdAndDelete(req.params.id)
        res.json(subject)

        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

module.exports={Admission,fetchStudent,deleteStudent,updateStudent}

