const express=require('express');
const cors=require('cors');

const proxy=require('express-http-proxy');

const app=express();
app.use(cors());
app.use(express.json());

//app.use('/',proxy('http://localhost:8000'));
app.use('/email',proxy('http://localhost:8001'));
app.use('/users',proxy('http://localhost:8002'));


app.listen(8000,()=>{
    console.log('Gateway is listening to port 8000');
})