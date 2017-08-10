                                  //  mongod --dbpath /data/db --smallfiles
var express = require ("express"),

 app = express();

var mongoose         = require("mongoose"),
 ejs                 =require("ejs"),

 bodyParser        = require("body-parser");

  


app.set("view engine","ejs");
 mongoose.connect("mongodb://localhost/customSite");
 app.use(express.static(__dirname + "/public"));     //Makes linking to public folder automatic- in this instance for stylesheet in header.



app.get("/",function(req,res){
    res.render("homepage");
})

app.get("/contact",function(req,res){
    res.render("contact");
})

app.get("/gallery",function(req,res){
    res.render("gallery");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/studies",function(req,res){
    res.render("studies");
})






 
 app.listen(process.env.PORT,process.env.IP,function(){
     console.log("NewSite Ready!");
 })
 
 
