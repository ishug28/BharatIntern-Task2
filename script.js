function convert() {
	var tempInput = document.getElementById("tempInput").value;
	var unitInput = document.getElementById("unitInput").value;
	var result = document.getElementById("result");

	if (unitInput == "celsius") {
		var fahrenheit = (tempInput * 1.8) + 32;
		var kelvin = parseFloat(tempInput) + 273.15;

		result.innerHTML = tempInput + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit = " + kelvin.toFixed(2) + " Kelvin";
	}
	else if (unitInput == "fahrenheit") {
		var celsius = (tempInput - 32) / 1.8;
		var kelvin = (tempInput - 32) / 1.8 + 273.15;

		result.innerHTML = tempInput + " Fahrenheit = " + celsius.toFixed(2) + " Celsius = " + kelvin.toFixed(2) + " Kelvin";
	}
	else if (unitInput == "kelvin") {
		var celsius = parseFloat(tempInput) - 273.15;
		var fahrenheit = (tempInput - 273.15) * 1.8 + 32;

		result.innerHTML = tempInput + " Kelvin = " + celsius.toFixed(2) + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
	}
}
