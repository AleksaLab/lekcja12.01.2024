const equationInput = document.getElementById("calculator-equation");
// ------------------------------------------------------------------
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const button0 = document.getElementById("button-0");
// ------------------------------------------------------------------
const dotButton = document.getElementById("dot-button");
const divisionButton = document.getElementById("division-button");
const multiplicationButton = document.getElementById("multiplication-button");
const subtractionButton = document.getElementById("subtraction-button");
const additionButton = document.getElementById("addition-button");
// ------------------------------------------------------------------
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clearbutton");
const solutionDisplay = document.getElementById("solution");
// ------------------------------------------------------------------
let mathEquation = "";
// ------------------------------------------------------------------

const addOneToEquation = () => {
	mathEquation += "1";
	equationInput.textContent = mathEquation;
};

const addTwoToEquation = () => {
	mathEquation += "2";
	equationInput.textContent = mathEquation;
};

const addThreeToEquation = () => {
	mathEquation += "3";
	equationInput.textContent = mathEquation;
};

const addFourToEquation = () => {
	mathEquation += "4";
	equationInput.textContent = mathEquation;
};

const addFiveToEquation = () => {
	mathEquation += "5";
	equationInput.textContent = mathEquation;
};

const addSixToEquation = () => {
	mathEquation += "6";
	equationInput.textContent = mathEquation;
};

const addSevenToEquation = () => {
	mathEquation += "7";
	equationInput.textContent = mathEquation;
};

const addEightToEquation = () => {
	mathEquation += "8";
	equationInput.textContent = mathEquation;
};

const addNineToEquation = () => {
	mathEquation += "9";
	equationInput.textContent = mathEquation;
};

const addZeroToEquation = () => {
	mathEquation += "0";
	equationInput.textContent = mathEquation;
};

const addDotToEquation = () => {
	mathEquation += ".";
	equationInput.textContent = mathEquation;
};

const addDivisionToEquation = () => {
	mathEquation += "/";
	equationInput.textContent = mathEquation;
};

const addMultiplicationToEquation = () => {
	mathEquation += "*";
	equationInput.textContent = mathEquation;
};

const addSubtractionToEquation = () => {
	mathEquation += "-";
	equationInput.textContent = mathEquation;
};

const addAdditionToEquation = () => {
	mathEquation += "+";
	equationInput.textContent = mathEquation;
};
//-------------------------------------------------------------------
button1.addEventListener("click", addOneToEquation);
button2.addEventListener("click", addTwoToEquation);
button3.addEventListener("click", addThreeToEquation);
button4.addEventListener("click", addFourToEquation);
button5.addEventListener("click", addFiveToEquation);
button6.addEventListener("click", addSixToEquation);
button7.addEventListener("click", addSevenToEquation);
button8.addEventListener("click", addEightToEquation);
button9.addEventListener("click", addNineToEquation);
button0.addEventListener("click", addZeroToEquation);
//-------------------------------------------------------------------
dotButton.addEventListener("click", addDotToEquation);
divisionButton.addEventListener("click", addDivisionToEquation);
multiplicationButton.addEventListener("click", addMultiplicationToEquation);
subtractionButton.addEventListener("click", addSubtractionToEquation);
additionButton.addEventListener("click", addAdditionToEquation);
// ------------------------------------------------------------------
// The eval() function evaluates JavaScript code represented as a string.

// console.log(eval('2 + 2'));
// // expected output: 4

// console.log(eval(new String('2 + 2')));
// // expected output: 2 + 2

// console.log(eval('2 + 2') === eval('4'));
// // expected output: true
// ------------------------------------------------------------------
const performCalculation = () => {
	console.log(mathEquation);
	try {
		let solution = eval(mathEquation.replace(/=/g, ""));
		solutionDisplay.textContent = `${mathEquation} = ${solution};`;
		console.log(solution);
		mathEquation = "";
	} catch (error) {
		solutionDisplay.textContent = "Error";
		mathEquation = "";
	}
};
const clearbaton = () => {
	mathEquation = "";
	solutionDisplay.textContent = "";
	equationInput.textContent = mathEquation;
};

// ------------------------------------------------------------------
calculateButton.addEventListener("click", performCalculation);
clearButton.addEventListener("click", clearbaton);

// ------------------------------------------------------------------

button1.addEventListener("click", addOneToEquation);
console.log(mathEquation);
