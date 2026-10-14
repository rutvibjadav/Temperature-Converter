"use strict";

const converterForm = document.querySelector("#converter-form");
const temperatureInput = document.querySelector("#temperature-input");
const fromUnitSelect = document.querySelector("#from-unit");
const toUnitSelect = document.querySelector("#to-unit");
const swapButton = document.querySelector("#swap-button");
const resetButton = document.querySelector("#reset-button");
const resultPanel = document.querySelector("#result-panel");
const resultLabel = document.querySelector("#result-label");
const resultValue = document.querySelector("#result-value");
const resultEquation = document.querySelector("#result-equation");

const units = {
  celsius: { name: "Celsius", symbol: "°C", absoluteZero: -273.15 },
  fahrenheit: { name: "Fahrenheit", symbol: "°F", absoluteZero: -459.67 },
  kelvin: { name: "Kelvin", symbol: "K", absoluteZero: 0 },
};

// Convert the input to Celsius first, then convert Celsius to the target unit.
function convertToCelsius(temperature, fromUnit) {
  switch (fromUnit) {
    case "celsius":
      return temperature;
    case "fahrenheit":
      return ((temperature - 32) * 5) / 9;
    case "kelvin":
      return temperature - 273.15;
    default:
      throw new Error("Unsupported source temperature unit.");
  }
}

function convertFromCelsius(temperature, toUnit) {
  switch (toUnit) {
    case "celsius":
      return temperature;
    case "fahrenheit":
      return (temperature * 9) / 5 + 32;
    case "kelvin":
      return temperature + 273.15;
    default:
      throw new Error("Unsupported target temperature unit.");
  }
}

function convertTemperature(temperature, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return temperature;
  }

  return convertFromCelsius(convertToCelsius(temperature, fromUnit), toUnit);
}

function formatTemperature(temperature) {
  return Number(temperature.toFixed(2)).toString();
}

function showMessage(message, isError = false) {
  resultPanel.classList.toggle("has-error", isError);
  resultLabel.textContent = isError ? "CHECK YOUR INPUT" : "YOUR RESULT";
  resultValue.textContent = message;
  resultEquation.textContent = isError ? "Please update the temperature above." : "";
}

function updateConversion(showEmptyError = true) {
  const inputValue = temperatureInput.value.trim();

  if (inputValue === "") {
    if (showEmptyError) {
      showMessage("Please enter a temperature.", true);
    }
    return;
  }

  const temperature = Number(inputValue);
  if (!Number.isFinite(temperature)) {
    showMessage("Enter a valid numeric temperature.", true);
    return;
  }

  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  const source = units[fromUnit];
  const target = units[toUnit];

  if (!source || !target) {
    showMessage("Please select valid temperature units.", true);
    return;
  }

  if (temperature < source.absoluteZero) {
    showMessage(
      `${source.name} cannot be below ${formatTemperature(source.absoluteZero)} ${source.symbol}.`,
      true,
    );
    return;
  }

  const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
  if (!Number.isFinite(convertedTemperature)) {
    showMessage("This temperature could not be converted. Please try another value.", true);
    return;
  }

  const formattedInput = formatTemperature(temperature);
  const formattedResult = formatTemperature(convertedTemperature);
  resultPanel.classList.remove("has-error");
  resultLabel.textContent = "YOUR RESULT";
  resultValue.textContent = `${formattedResult} ${target.symbol}`;
  resultEquation.textContent = `${formattedInput} ${source.symbol} = ${formattedResult} ${target.symbol}`;
}

temperatureInput.addEventListener("input", () => updateConversion());
fromUnitSelect.addEventListener("change", () => updateConversion());
toUnitSelect.addEventListener("change", () => updateConversion());

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateConversion();
});

swapButton.addEventListener("click", () => {
  const previousFromUnit = fromUnitSelect.value;
  fromUnitSelect.value = toUnitSelect.value;
  toUnitSelect.value = previousFromUnit;
  updateConversion();
});

resetButton.addEventListener("click", () => {
  temperatureInput.value = "";
  fromUnitSelect.value = "celsius";
  toUnitSelect.value = "fahrenheit";
  resultPanel.classList.remove("has-error");
  resultLabel.textContent = "YOUR RESULT";
  resultValue.textContent = "—";
  resultEquation.textContent = "Your conversion will appear here.";
  temperatureInput.focus();
});
