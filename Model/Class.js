const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Types.ObjectId,
      ref: "School",
      require: true,
    },
    class: {
      type: String,
      require: true,
    },
    fee: {
      type: Number,
      require: true,
    },

    classTeacher: {
      type: mongoose.Types.ObjectId,
      ref: "Teacher",
      require: true,
    },
    section:[
        {
            type:String,
            require:true
        }
    ]
  },
  { timestamps: true },
);

const CLASS = mongoose.model("Class", ClassSchema);

module.exports = CLASS;
