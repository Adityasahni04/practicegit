const mongoose=require('mongoose')

const personSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        required:true
    },
    work:
    {
        type:String,
        required:true,
        enum:['waiter','chef','manager'],
    },
    mobile:{
             type:Number,
             required:true,
             validate: {
                validator: function(value) {
                    return /^\d{1,10}$/.test(value);
                },
                message: props => `${props.value} is not a valid phone number! It should not be more than 10 digits.`
            }
    }

})
const person=mongoose.model('person',personSchema);
module.exports={
    person
}