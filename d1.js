const { default: mongoose } = require("mongoose");
url='mongodb://127.0.0.1:27017/practice'
mongoose.connect(url);
const db=mongoose.connection;
db.on('connected',()=>
{
    console.log("Database is connected")
})
db.on('disconnected',()=>
    {
        console.log("Database is disconnected")
    })
module.exports={db};