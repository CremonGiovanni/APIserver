var express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
//http://localhost:3000/match?a=checchia&b=belvedere
app.get("/match", function (req, res) {
    let a= req.query.a;
    let b= req.query.b;
    let per=(Math.floor(Math.random() * 100)+1)
    console.log(a+" match "+b+" "+per+"%")
    res.send(a+" match "+b+" "+per+"%");
});

app.listen(3000);
