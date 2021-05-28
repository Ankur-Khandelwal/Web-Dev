const express = require("express");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get('/',function(req,res){
  res.render("home",{fermiResult:responseMessage, gCount:guessCount});
});

function r(){
  return Math.floor(Math.random()*10);
}

var secretDigits = [r(),r(),r()];
var responseMessage=[];
var guessCount=0;

for(i=0;i<3;i++){
  console.log(secretDigits[i]);
}


function guessCheck(guessedString){
  responseMessage=[];
  var guess=[3];
  for(i=0;i<3;i++){
    guess[i]=Number(guessedString[i]);
    if(guess[i]===secretDigits[i]) responseMessage.push("Fermi");
    else if(secretDigits.includes(guess[i])) responseMessage.push("Pico");
    else responseMessage.push("Nano");
  }
  responseMessage.sort();
  console.log(responseMessage);
}

app.post('/rstrtGm',function(req,res){
  secretDigits = [r(),r(),r()];
  responseMessage=[];
  guessCount=0;
  for(i=0;i<3;i++){
    console.log(secretDigits[i]);
  }
  res.redirect('/');
});

app.post('/',function(req,res){
  guessedNumbers = req.body.guessedNum;
  console.log(guessedNumbers);
  console.log(typeof(guessedNumbers));
  guessCheck(guessedNumbers);
  guessCount++;
  res.redirect("/");
});
