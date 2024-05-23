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
//comment added for testing purpose
const student=mongoose.model('student',newstudent);
module.exports=student;