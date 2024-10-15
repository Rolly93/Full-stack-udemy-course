import {dirname} from "path";
import express from 'express';
import {fileURLToPath} from "url";
import bodyParser from 'body-parser';
//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

 app.use(bodyParser.urlencoded({extended:true}));

 app.get("/",(req,res)=>
{
    res.sendFile(__dirname +"/public/index.html");

})

app.post("/check",(req,res)=>
    {
        let pwd = req.body;
       const contrasena = (pwd.password === "ILovePrograming");
    if (contrasena) {
            res.sendFile(__dirname+'/public/secret.html');
           }
           else{
            res.sendFile(__dirname +"/public/index.html");
            }
    })
    
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})