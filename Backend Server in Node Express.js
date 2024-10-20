const express = require('express');
const app = express();
const port =3005;
const jwt=require('jsonwebtoken';)
app.get('/',(req,res)=>
    {
        res.send(<h1>Welcome Random Number Generator</h1>)
    })
app.listen(port,()=>
    {
        console.log("App is listening on port ${port}");
    }
           );
app.use(bodyParser.urlencoded({extendedtrue}));
app.get('/protected',(req,res)=>
    {
        const token=req.header['authorization'];
        if(!token)
        {
            return
            res.status(404).json({message:"Not Found!"})
        }
        res.send(<h1>Welcome Random Number Generator</h1>)
    })
jwt.verify(token,secret-key,(err,decoded)=>{
    if(err)
    {
        return
        res.status(401).json({message:"Unauthorized"})
    }
})
app.post('/logout',(req,res)=>
    {
        res.send({message:"Log Out Successfully!"});
    })
