function myDisplayer(message) {
  document.getElementById("message").innerHTML = message;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 20, myDisplayer);
