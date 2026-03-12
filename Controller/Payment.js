const PAYMENT=require("../Model/Payment")


async function createPayment(req,res){

    try {

        req.body.school=req.user._id
        const payment=await PAYMENT.create(req.body)

        res.json(payment)
    } catch (error) {

         res.status(500).json({ error: error.message });
        
    }


}

async function fetchPayment(req,res){

    try {
        
        const payment=await PAYMENT.find({school:req.user._id}).sort({createdAt})

        
        res.json(payment)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function updatePayment(req,res){

    try {
        
         const payment=await PAYMENT.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(payment){

        return res.status(404).json({message:"Subject not Found"})

    }
    res.json(salary)


        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}

async function deletePayment(req,res){

    try {
       
        const payment=await PAYMENT.findByIdAndDelete(req.params.id)
        res.json(payment);
        
    } catch (error) {

        res.status(500).json({ error: error.message });
        
    }
}



module.exports={deletePayment,updatePayment,fetchPayment,createPayment}