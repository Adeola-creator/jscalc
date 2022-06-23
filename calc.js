let operand1 = prompt("Enter the first number")
let fNumber = parseInt(operand1)
while(isNaN(fNumber)){
  operand1 = prompt("Invalid input, Please enter an integer");
  fNumber = parseInt(operand1);
}

let operand2 = prompt("Enter the second number")
let sNumber = parseInt(operand2)
while(isNaN(sNumber)){
  operand2 = prompt("Invalid input, Please enter an integer");
  sNumber = parseInt(operand2);
}

const operations = ["+", "-", "/", "*"]
let operator = prompt("Please select any of the following operations you would like to perform\n +, *, /, -")
while(!operations.includes(operator)){
    operator = prompt("Please select a valid operation from:\n +, *, /, -")
}

if(operator === '+'){
   alert(fNumber + sNumber)
}
else if(operator === '-'){
    alert(fNumber - sNumber)
}
else if(operator === '/'){
    alert(fNumber / sNumber)
}
else if(operator === '*'){
    alert(fNumber * sNumber)
}
else{
    alert("You have entered an invalid operator")
}