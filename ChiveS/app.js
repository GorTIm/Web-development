var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chives",{useNewUrlParser:true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var shoesTemplate=new mongoose.Schema({
	name:String,
	image:String,
	description:String,
});

var Shoes = mongoose.model("Shoes",shoesTemplate);


/*
Shoes.create(
	{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
	description:"Sample description 1"}
);

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
*/
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/shoes", function(req, res){
	Shoes.find({},function(err,allShoes){
		if(err){
			console.log(err);
		}else{
			res.render("index",{shoes:allShoes});
		}
	});
});

app.post("/shoes", function(req, res){
    // get data from form and add to shoes array
    var name = req.body.name;
    var image = req.body.image;
	var desc=req.body.description;
    var newShoes = {name: name, image: image, description:desc}
    //redirect back to shoes page
    Shoes.create(newShoes,function(err,newlyCreated){
		if(err){
			console.log(err);
		}else{
			res.redirect("/shoes");
		}
	});
});

app.get("/shoes/new", function(req, res){
   res.render("new"); 
});

app.get("/shoes/:id",function(req,res){
	Shoes.findById(req.params.id,function(err,foundShoe){
		if(err){
			console.log(err);
		}else{
			res.render("show",{shoe:foundShoe});
		}
	});
	
});

app.listen(3000, function(){
   console.log("The ChiveS Server Has Started!");
});