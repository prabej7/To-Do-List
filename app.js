const express = require("express");
const bodyParse = require("body-parser");
const date = require("./views/date");

const app = express();

let lists = [];

app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    // console.log(date());
    var m = date();
    res.render("index",{listname :lists,date: m});
});

app.post("/",(req,res)=>{
    if(req.body.newList.length === 0)
    {

        res.redirect("/");
    } else{
        lists.push(req.body.newList);
        res.redirect("/");
    }
    
});

app.listen(3000,()=>{
    console.log("Serve is running at port 3000.");
});