import { calculateCircumference, calculateArea } from "./circlecalculator.js";
import { convertToNumber } from "./validation.js";

document.querySelector("#submitButton").onclick = submitFunction;
document.querySelector("#submitAreaButton").onclick = submitAreaFunction;

function submitFunction() {
  let userRadius = convertToNumber(document.getElementById("radius").value);
  let outputElement = document.getElementById("output");
  if (userRadius) {
    let circumference = calculateCircumference(userRadius);
    outputElement.innerHTML = `The circumference is ${circumference}`;
  } else {
    outputElement.innerHTML = "PLease enter a valid number.";
  }
}

function submitAreaFunction() {
  let userRadius = convertToNumber(
    document.getElementById("radiusForArea").value
  );
  let outputElement = document.getElementById("outputArea");
  if (userRadius) {
    let area = calculateArea(userRadius);
    outputElement.innerHTML = `The area is ${area}!`;
  } else {
    outputElement.innerHTML = "Please enter a valid number.";
  }
}
