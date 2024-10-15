import express from 'express';

const app = express();
const port = 3000;
const contact = "/contact";
const about = "/about";
app.get('/' , (req ,res)=>{
    res.send("hello world <br><a href ='/contact'> contact </a>    <a href = '/about'> about </a>");

})
app.get(contact, (req ,res) =>{
    res.send('my name is rolando rios');
    res.send(`<a href = /contact> contact </a>`);
    res.send(`<a href = /about> about </a>`);
    res.send(`<a href = /> HOME </a>`);
})
app.get(about, (req , res)=>{
    res.send ('this is my bro');
    res.send('<a href = /contact> contact </a>');
    res.send(`<a href = /about> about </a>`);
    res.send(`<a href = /> HOME </a>`);
})
app.listen(port , (req , res)=>{
    console.log(`running server ${port}`);
})
