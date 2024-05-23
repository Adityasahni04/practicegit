const express = require('express');
const student = require('./../models/student'); // Ensure the correct path
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newStudent = new student(data);
        const response = await newStudent.save();
        console.log('Data saved');
        res.status(201).json(response);
    } catch (err) {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/',async(req,res)=>{
    try{
      const data= await student.find();
      res.status(201).json(data);
    }
    catch
    {
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const studentid=req.params.id;
        const updatedStudent=req.body;
         const response= await student.findByIdAndUpdate(studentid,updatedStudent,{
            new:true,
            runValidators: true,
         })
         res.status(201).json(response);
    }
    catch{
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id', async(req,res)=>
{
    try
    {
    const studentid=req.params.id;
    const response= await student.findByIdAndDelete(studentid);
    res.status(201).json(response);
    console.log("deleted successfully")
    }
    catch(err){
        console.error('Internal server error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports = router;
