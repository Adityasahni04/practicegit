const express=require('express');

const db=require('./d1')

const bodyParser=require('body-parser');

const StudentRoutes=require('./routes/StudentRoutes.js')
const app=express();
app.use(bodyParser.json());
app.use('/student',StudentRoutes);

app.listen(1010)