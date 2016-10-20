var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var multiply = document.getElementById("multiply")
var divide = document.getElementById("divide")

add.addEventListener("click" , function(event){ 
var input = parseInt(document.getElementById("numInput").value);
var secondInput = parseInt(document.getElementById("secondInput").value);
  document.getElementById("output").innerHTML += "<h2>" + "The Addition Button Returned: " + addDrew(input, secondInput) + "</h2>"
  return addDrew(input , secondInput);
});

subtract.addEventListener("click" , function(event){ 
var input = parseInt(document.getElementById("numInput").value);
var secondInput = parseInt(document.getElementById("secondInput").value);
document.getElementById("output").innerHTML += "<h2>" + "The Subtraction Button Returned: " + subtractDrew(input, secondInput) + "</h2>"  
});

multiply.addEventListener("click" , function(event){ 
var input = parseInt(document.getElementById("numInput").value);
var secondInput = parseInt(document.getElementById("secondInput").value);
document.getElementById("output").innerHTML += "<h2>" + "The Multiply Button Returned: " + calcDrew(input, secondInput) + "</h2>"
});

divide.addEventListener("click" , function(event){ 
var input = parseInt(document.getElementById("numInput").value);
var secondInput = parseInt(document.getElementById("secondInput").value);
document.getElementById("output").innerHTML += "<h2>" + "The Divide Button Returned: " + divideDrew(input, secondInput) + "</h2>"

});


function calcDrew(x,y){
  answer = x * y;
  return answer;
}





function addDrew(x,y){
  answer = x + y;
  return answer;
}



function subtractDrew(x,y){
  answer = x - y;
  return answer;
}



function divideDrew(x,y){
  answer = x / y;
  return answer;
}





function three(x, y, i){
  answer = i * (x + y);
  return answer;
}




