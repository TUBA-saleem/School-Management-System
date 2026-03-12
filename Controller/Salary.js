const SALARY=require("../Model/Salary")


async function createSalary(req,res){

    try {

        req.body.school=req.user._id
        const salary=await SALARY.create(req.body)

        res.json(salary)
    } catch (error) {

         res.status(500).json({ error: error.message });
        
    }


}

async function fetchSalary(req,res){

    try {
        
        const salary=await SALARY.find({school:req.user._id}).sort({createdAt})

        
        res.json(salary)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function updateSalary(req,res){

    try {
         const salary=await SALARY.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(expense){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(salary)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function deleteSalary(req,res){

    try {
       

        const salary=await SALARY.findByIdAndDelete(req.params.id)
        res.json(salary)

        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}



module.exports={deleteSalary,updateSalary,fetchSalary,createSalary}