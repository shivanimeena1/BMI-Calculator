function calculate() {

  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("Please enter valid height and weight");
    return;
  }

  var bmi = weight / (height / 100 * height / 100);
  var total = bmi.toFixed(2);
  document.getElementById("result").innerHTML = `Your BMI is ${total}`;
}
