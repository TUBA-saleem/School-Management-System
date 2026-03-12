const EXPENSE=require("../Model/Expense")


async function createExpence(req,res){

    try {

        req.body.school=req.user._id
        const expense=await EXPENSE.create(req.body)

        res.json(expense)
    } catch (error) {

         res.status(500).json({ error: error.message });
        
    }

}

async function fetchExpense(req,res){

    try {
        
        const expense=await EXPENSE.find({school:req.user._id}).sort({createdAt})

        
        res.json(expense)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function updateExpense(req,res){

    try {
         const expense=await EXPENSE.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(expense){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(expense)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function deleteExpense(req,res){

    try {
       

        const expense=await EXPENSE.findByIdAndDelete(req.params.id)
        res.json(expense)

        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}



module.exports={deleteExpense,updateExpense,fetchExpense,createExpence}