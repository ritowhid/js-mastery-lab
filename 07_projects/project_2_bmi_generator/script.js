const form = document.querySelector("form");
const body = document.body;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");

  results.textContent = "--";
  message.textContent = "";
  body.style.backgroundColor = "#f1f5f9";

  if (!height || height <= 0) {
    message.textContent = "Please enter a valid height.";
    return;
  }

  if (!weight || weight <= 0) {
    message.textContent = "Please enter a valid weight.";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.textContent = bmi;

  if (bmi < 18.5) {
    body.style.backgroundColor = "#38bdf8";
    message.textContent = "Your BMI is low. You may be underweight.";
  } 
  else if (bmi < 25) {
    body.style.backgroundColor = "#22c55e";
    message.textContent = "Your BMI is healthy. Good job!";
  } 
  else if (bmi < 30) {
    body.style.backgroundColor = "#facc15";
    message.textContent = "Your BMI is high. Try to stay active.";
  } 
  else {
    body.style.backgroundColor = "#ef4444";
    message.textContent = "Your BMI is very high. Consider lifestyle changes.";
  }
});
