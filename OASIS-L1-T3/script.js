function convertTemp() {
  const input = parseFloat(document.getElementById('inputTemp').value);
  const type = document.getElementById('inputType').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(input)) {
    resultDiv.textContent = 'Please enter a valid number';
    return;
  }

  let result;

  switch (type) {
    case 'Fahrenheit':
      result = (input - 32) * (5 / 9);
      resultDiv.textContent = `${result.toFixed(4)} °C`;
      break;
    case 'Celsius':
      result = (input * 9 / 5) + 32;
      resultDiv.textContent = `${result.toFixed(4)} °F`;
      break;
    case 'Kelvin':
      result = input - 273.15;
      resultDiv.textContent = `${result.toFixed(4)} °C`;
      break;
  }
}
