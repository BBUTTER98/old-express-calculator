const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
    res.sendFile(__dirname+"/form.html");  
});
app.post("/", function(req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operator = req.body.operator;
    let equalation = Number;
    switch(operator){
        case "add":
            equalation = num1 + num2;
            res.send("adding these two numbers is equal to: "+equalation);
            break;
        case "minus":
            equalation = num1 - num2;
            res.send("minsuing these two numbers is equal to: "+equalation);
            break;
        case "multiply":
            equalation = num1 * num2;
            res.send("multiplying these two numbers is equal to: "+equalation);
            break;
        case "divide":
            equalation = num1 / num2;
            res.send("divinding these two numbers is equal to: "+equalation);
            break;
    }
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});


