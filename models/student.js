const { default: mongoose } = require("mongoose");


const newstudent=mongoose.Schema({
    Name:
    {
        required:true,
        type:String,
    },
    Age:
    {
        required:true,
        type:Number,
    }
})

const student=mongoose.model('student',newstudent);
module.exports=student;