import fs from  'fs';
import express  from "express";
import bodyParser from "body-parser"; 
import postcomments from "./post-comments.json" with {type : "json"};
const app = express();
const port = 3000;
let pst = postcomments;
let id

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
 
  res.render("index");

});

app.post("/submit",(req,res)=>{
 var  icon = iconName(req.body.userName)
 var date = myDate();
 var id = icon;
var data ={
  icon: icon,
    userName: req.body.userName,
    comments: req.body.comments,
    date_time: date,
    id: id
 }

pst.push(data);  
save();
  res.render("index.ejs" , {posts:pst});
});

const save= ()=>{
  fs.writeFile(
    "./post-comments.json",
    JSON.stringify(pst,null,2),
(err)=>{
  if (err) {
    throw err
    }else {
      console.log("file save it");
    }
});
};
function myDate (){
  let date = new Date();
return  new Date().toLocaleDateString().split(",")[0]
}
function iconName(username) {
  const iconName = username.toUpperCase().split(" ");
  let myicon;
  if (iconName.length > 1 && iconName[0][0] && iconName[1][0]) {
    myicon = iconName[0][0] + iconName[1][0];
  } else {
    myicon = iconName[0][0] + "U";
  }
  console.log(`${myicon}`);
  return myicon;
}
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  app.delete("/delete/:id", (req, res) => {
    pst = pst.filter(({ id }) => id !== req.params.id);
    save();
    res.redirect('/submit');
  });  
  
  app.put("/edit/:id", (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    pst = pst.map(post => post.id === postId ? { ...post, ...updatedPost } : post);
    save();
    res.json({
      status: 'success',
      updated: postId,
      newLength: pst.length
    });
  });