// declaring variables...

const operatorButtons = document.querySelectorAll('.operator-button')
const equalButton = document.querySelector('.equal-button')
let firstNumber;
let secondNumber;
let currentOperator;

// save the first number and the operator...

operatorButtons.forEach (function (button) {
    button.addEventListener('click', function() {
        currentOperator = button.textContent;
        firstNumber = parseFloat(displayNumber.textContent);
        displayNumber.textContent = '';
    });
});

// save the second number and operate...
equalButton.addEventListener('click', function(){
    secondNumber = parseFloat(displayNumber.textContent);
    displayNumber.textContent = operate(firstNumber, secondNumber, currentOperator);
    
});


// create variable of where the variable is displayed and the buttons are clicked
    
const displayNumber = document.querySelector('.calc-display')
const numberButtons = document.querySelectorAll('#calc-button')

// Create function that populates the display

    numberButtons.forEach (function (button) {
        button.addEventListener('click', function () {
            // Get the current content of the display
            let currentText = displayNumber.textContent;

            // Get the text content of the clicked button
            let buttonText = button.textContent;

            // Concatenate the current text with the clicked button's text
            let newText = currentText + buttonText;

            // Update the display with the new text
            displayNumber.textContent = newText;

        });
    });

const clearButton = document.querySelector('#button-clear');
const deleteButton = document.querySelector('#button-delete');

// configuring clear button 

clearButton.addEventListener('click', function() {
    displayNumber.textContent = '';
    firstNumber = 0;
    secondNumber = 0
    currentOperator = ''
});

// configuring delete button
deleteButton.addEventListener('click', function() {
    // Get the current content of the display
    let currentText = displayNumber.textContent;

    // If the current text is not empty, remove the last character
    let newText = currentText.length > 0 ? currentText.slice(0, -1) : '';

    // Update the display with the new text
    displayNumber.textContent = newText;
});

// Create variables for the two numbers and the operator

let a,b, operator;

// Create the basic math functions

function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

// Create the function operate that takes an operator and two numbers and calls one of the functions above

function operate(a, b, operator){
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }   
}