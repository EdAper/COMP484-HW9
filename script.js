// Part 1: Get the current local date and give the month and day two digits.
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();
let formattedMonth;
let formattedDay;

// JavaScript counts months from 0, so getMonth() needs the + 1 above.
if (month < 10) {
  formattedMonth = "0" + month;
} else {
  formattedMonth = "" + month;
}

if (day < 10) {
  formattedDay = "0" + day;
} else {
  formattedDay = "" + day;
}

const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;

// Part 2: Use four separate starting variables, with no arrays or loops.
const wholeNumberText = "27";
const decimalText = "14.60";
const invalidNumberText = "banana";
const anotherWholeNumberText = "120";

// Convert each string separately. The nonnumeric string becomes NaN.
const wholeNumber = Number(wholeNumberText);
const decimalNumber = Number(decimalText);
const invalidNumber = Number(invalidNumberText);
const anotherWholeNumber = Number(anotherWholeNumberText);

// Each row shows the original text, conversion, NaN check, and integer check.
const wholeNumberResult = `
  <tr>
    <td>"${wholeNumberText}"</td>
    <td>${wholeNumber}</td>
    <td>${Number.isNaN(wholeNumber)}</td>
    <td>${Number.isInteger(wholeNumber)}</td>
  </tr>
`;

const decimalResult = `
  <tr>
    <td>"${decimalText}"</td>
    <td>${decimalNumber}</td>
    <td>${Number.isNaN(decimalNumber)}</td>
    <td>${Number.isInteger(decimalNumber)}</td>
  </tr>
`;

const invalidNumberResult = `
  <tr>
    <td>"${invalidNumberText}"</td>
    <td>${invalidNumber}</td>
    <td>${Number.isNaN(invalidNumber)}</td>
    <td>${Number.isInteger(invalidNumber)}</td>
  </tr>
`;

const anotherWholeNumberResult = `
  <tr>
    <td>"${anotherWholeNumberText}"</td>
    <td>${anotherWholeNumber}</td>
    <td>${Number.isNaN(anotherWholeNumber)}</td>
    <td>${Number.isInteger(anotherWholeNumber)}</td>
  </tr>
`;

const conversionResults = wholeNumberResult + decimalResult + invalidNumberResult + anotherWholeNumberResult;
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// Part 4: An if/else displays a message based on whether the conversion failed.
let validationMessage;

if (Number.isNaN(invalidNumber)) {
  validationMessage = 'The value "' + invalidNumberText + '" is not a valid number.';
} else {
  validationMessage = 'The value "' + invalidNumberText + '" converted to a valid number.';
}

document.getElementById("validationOutput").textContent = validationMessage;

// Part 3: Add three numeric scores, divide to get the average, then format it.
const firstScore = 88;
const secondScore = 94;
const thirdScore = 79;
const totalScore = firstScore + secondScore + thirdScore;
const averageScore = totalScore / 3;
const formattedAverage = averageScore.toFixed(2);

const mathResults = `
  <p class="calculation">Scores: ${firstScore}, ${secondScore}, and ${thirdScore}</p>
  <div class="math-grid">
    <div class="math-stat">
      <p class="stat-label">Total score</p>
      <p class="stat-value">${totalScore}</p>
      <p class="formula">${firstScore} + ${secondScore} + ${thirdScore}</p>
    </div>
    <div class="math-stat">
      <p class="stat-label">Average score</p>
      <p class="stat-value">${formattedAverage}</p>
      <p class="formula">${totalScore} / 3, formatted to 2 decimals</p>
    </div>
  </div>
`;

document.getElementById("mathOutput").innerHTML = mathResults;

// Part 4: A second if/else displays the grade result using the numeric average.
let gradeMessage;

if (averageScore >= 70) {
  gradeMessage = "Passing: the average is 70 or higher.";
} else {
  gradeMessage = "Not passing: the average is below 70.";
}

document.getElementById("gradeOutput").textContent = gradeMessage;
