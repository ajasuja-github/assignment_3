var express = require("express");
var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
app.use(express.static('public')); 
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.redirect("C:\Users\HP\Desktop\web322-app\views\home.html")
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    // res.send("<h3>About</h3>");
    res.sendFile(path.join(__dirname,"C:\Users\HP\Desktop\web322-app\views\about.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
