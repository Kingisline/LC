const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = express();



app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'))


function checkloveper(){

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
  
    if(name == ""){
     alert('Please enter your name');
    }else if (name.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(name)){
     alert('Numbers are not allowed');
    }
  
    else if(lname == ""){
     alert('Please enter your love name');
    }else if (lname.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(lname)){
     alert('Numbers are not allowed');
    }
    else{
    var lovdata = Math.random() * 100;
    lovdata = lovdata + 1;
    lovdata = Math.floor(lovdata);
    document.getElementById('lovevalue').value = lovdata + "%"; 
    }
    
   };
