var express= require("express");
var app =express();
var request=require("request");
app.set("view engine","ejs");
app.get("/",function(req,res)
	   {
	res.render("search");
});

app.get("/results",function(req,res)
	   { var here = req.query.shivam;
	var url="http://www.omdbapi.com/?s=" + here + "&apikey=thewdb";
	request(url,function(error,response,body)
	   {
	
	if(!error && response.statusCode == 200)
		{
			var parsedata=JSON.parse(body);
			res.render( "movie",{parsedata,parsedata});
		}
	
});
});

app.listen(process.env.PORT || 3000,process.env.IP,function()
		  {
	console.log("movieapp has started");
});