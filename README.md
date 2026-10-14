# Temperature Converter

A responsive, browser-based temperature converter for quickly converting values between Celsius, Fahrenheit, and Kelvin. It provides live results, clear validation, and a short introduction to each temperature scale.

## Internship and task

- **Internship:** Veda Technology – Web Development Internship
- **Task:** Level 1 – Day 5
- **Project title:** Temperature Converter

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, external libraries, or build tools are required.

## Features

- Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K).
- Update results as the temperature or either unit selection changes.
- Swap the source and target units.
- Reset the value, result, and units to their defaults.
- Validate numeric input and reject values below absolute zero.
- Support decimal values and negative Celsius/Fahrenheit temperatures.
- Display results to at most two decimal places without unnecessary zeros.
- Responsive layout for mobile, tablet, and desktop screens.

## Conversion formulas

- Celsius to Fahrenheit: `F = (C × 9/5) + 32`
- Fahrenheit to Celsius: `C = (F - 32) × 5/9`
- Celsius to Kelvin: `K = C + 273.15`
- Kelvin to Celsius: `C = K - 273.15`
- Fahrenheit to Kelvin: `K = (F - 32) × 5/9 + 273.15`
- Kelvin to Fahrenheit: `F = (K - 273.15) × 9/5 + 32`

When the source and target units match, the entered value is returned unchanged.

## Run locally

1. Download or clone this project to your computer.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser:
   - In VS Code, right-click `index.html` and choose **Reveal in File Explorer**, then double-click it; or
   - Use a local development server such as the **Live Server** extension and select **Open with Live Server**.
4. Enter a temperature and choose the source and target units. The result updates as you type or change either unit.

## Test the converter

- Convert `25` from Celsius to Fahrenheit: `25 °C = 77 °F`.
- Convert `32` from Fahrenheit to Celsius: `32 °F = 0 °C`.
- Convert `0` from Celsius to Kelvin: `0 °C = 273.15 K`.
- Convert `0` from Kelvin to Celsius: `0 K = -273.15 °C`.
- Convert `-40` from Celsius to Fahrenheit: `-40 °C = -40 °F`.
- Select the same unit in both menus to verify the input is unchanged.
- Try a decimal, swap units, reset, submit an empty value, and enter a value below absolute zero to test live conversion and validation.

## Project files

- `index.html` — page structure and converter controls
- `style.css` — responsive layout, colors, and visual styles
- `script.js` — conversion functions, live updates, and validation

## Links

- **GitHub repository:** [Add repository URL here]
- **Live demo:** [Add live demo URL here]
