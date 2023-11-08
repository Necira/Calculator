function display(newValue){
  let input = document.getElementById("result");
  input.value += newValue
}

let firstValue = "";
let operator = "";

function equals(){
  let input = document.getElementById("result");
  let secondValue = input.value;
  let result = "";
  if (operator == "minus") {
      result = firstValue-secondValue;
  }
  else if(operator == "plus"){
      result = parseInt(firstValue, 10) + parseInt(secondValue, 10);
  }
  else if(operator == "divide"){
      result = parseInt(firstValue, 10) / parseInt(secondValue, 10);
  }
  else if(operator == "multiply"){
      result = parseInt(firstValue, 10) * parseInt(secondValue, 10);
  }
  input.value = result;
  previousOutputs(result);
}

function minus(){
    let input = document.getElementById("result");
    firstValue = input.value;
    input.value = "";
    operator = "minus";
    console.log(operator);
 }

function plus(){
    let input = document.getElementById("result")
    firstValue = input.value;
    input.value = "";
    operator = "plus";
    console.log(operator);
}
function divide(){
    let input = document.getElementById("result");
    firstValue = input.value;
    input.value = "";
    operator = "divide";
    console.log(operator);
}
function multiply(){
    let input = document.getElementById("result");
    firstValue = input.value;
    input.value = "";
    operator = "multiply";
    console.log(operator);
}
// function previousOutputs(result){
//    let pO = document.getElementById("previousOutputs");
//    let newResult = pO.innerHTML + "<p>" + result + "</p>";
//    pO.innerHTML = newResult;
//     console.log(pO);
// }

// function currentOutput(result){
//     let cO = document.getElementById("currentOutput");
//     actualResult = pO.innerHTML + "<p>" + 
//     cO.innerHTML = result;
// }
