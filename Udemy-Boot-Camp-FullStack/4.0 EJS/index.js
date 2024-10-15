import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  
  res.render("index.ejs");

});
app.post("/submit", (req, res) => {
  const fullname = req.body;
  const lName = fullname.lName;
  const fName = fullname.fName; 
  const lenName = (fName.length + lName.length);
res.locals ={
  cName : lenName
};
const data = res.locals;

 res.render("index.ejs",data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

