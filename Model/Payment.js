const mongoose=require("mongoose")



const PaymentSchema=new mongoose.Schema({

school:{
    type:mongoose.Types.ObjectId,
    ref:"School"

},
student:{
    type:mongoose.Types.ObjectId,
    ref:"Student"

},

  fee: {
    type: Number,
    require: true,
  },
  feeDate: {
    type: Date,
    require: true,
  },

}, { timestamps: true })




const PAYMENT=mongoose.model("Payment",PaymentSchema)

module.exports=PAYMENT