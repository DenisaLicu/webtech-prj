var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

//include static files from dashboard server

//cand intru pe url cu / dashboard imi incarca pg statica din folderul dashboard
app.use('/dashboard', express.static('dashboard'));

app.use('/pos', express.static('pos'));



// REST methods 
//cand cer produse==am in url products el apeleaza functia de callbak 
//req parametrii din cererea mea
//res e raspunsul primit
//status(200) = indeplinit cu succes
//status(404) =not found
//imi trimite un array de json
app.get('/products', function(req,res){
    res.status(200).send([{name:"COCA_COLA",price:2.99},{name:"PEPSI",price:2.66},{name:"FANTA", price:2.99}]);
});

app.listen(process.env.PORT);
