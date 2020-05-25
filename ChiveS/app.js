var express=require("express");
var app=express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/shoes", function(req, res){
    res.render("shoes",{campgrounds:campgrounds});
});

app.post("/shoes", function(req, res){
    // get data from form and add to shoes array
    var name = req.body.name;
    var image = req.body.image;
    var newShoes = {name: name, image: image}
    campgrounds.push(newShoes);
    //redirect back to shoes page
    res.redirect("/shoes");
});

app.get("/shoes/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(3000, function(){
   console.log("The ChiveS Server Has Started!");
});