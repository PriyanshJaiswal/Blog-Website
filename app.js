//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");
const homeStartingContent = "I’m Priyansh Jaiswal. I’m a final year undergraduate at Delhi Technological University. Since 2018 I’ve learned a lot about Algorithmic Coding and Web Development. I’m sharing what I’ve learned and passing my knowledge onto you. ";
const aboutContent = "Millions of people use The Excellent Daybook every day to create and track blogs. It’s simple, fun and effective, quite colorful, and displays a welcoming mix of diverseness. So if you are looking forward on joining us la bienvenida.";
const contactContent = "Want to discuss anything related to the Blog site, feel free to contact me at xyz@gmail.com";
var posts= [];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("home",{loremipsum :homeStartingContent,posts1 :posts});
});
app.get("/about",function(req,res){
  res.render("about",{loremipsum2 :aboutContent});
});
app.get("/contact",function(req,res){
  res.render("contact",{loremipsum3 :contactContent});
});
app.get("/compose",function(req,res){
  res.render("compose");
});
app.get("/posts/:page1",function(req,res){
  var requestedtitle =  _.lowerCase(req.params.page1);
  posts.forEach(function(post){
    const title1 = _.lowerCase(post.title);
    if(title1===requestedtitle){
      res.render("post",{post :post});
    }
  });
})
app.post("/compose",function(req,res){
  const post ={
    title :req.body.inp,
    content :req.body.input2,
  }
  posts.push(post);
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
