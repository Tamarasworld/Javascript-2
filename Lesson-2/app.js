import { calculateCircumference, calculateArea } from "./circlecalculator.js";
import { convertToNumber } from "./validation.js";

document.querySelector("#submitButton").onclick = submitFunction;
document.querySelector("#submitAreaButton").onclick = submitAreaFunction;

function submitFunction() {
  let userRadius = convertToNumber(document.getElementById("radius").value);
  let outputElement = document.getElementById("output").;
  if (userRadius) {
    let circumference = calculateCircumference(userRadius)
    outputElement = `The circumference is ${circumference}`;
  } else {
    outputElement.getElementById("output").inn =
      "PLease enter a valid number.";
  }
}

function submitAreaFunction() {
  let userRadius = convertToNumber(
    document.getElementById("radiusForArea").value
  );
  if (userRadius) {
    let area = calculateArea(userRadius);
    document.getElementById("output").innerHTML = `The area is ${area}!`;
  }
}
