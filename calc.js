let currentNum = '';
let lastNum = '';
let currentOp = '';

let last = document.getElementById("last");
let current = document.getElementById("current");
const numBtns = document.querySelectorAll(".digit");
const opBtns = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const enterBtn = document.getElementById("equals");

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        num(button.textContent);     
        console.log(button.textContent);
    })
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        op(button.textContent);
        console.log(button.textContent);
    })
});


function num(number) {
    current.textContent = number;
    currentNum = number;
}

function op(operator) {
    currentOp = operator;
    lastNum = current.textContent; 
    last.textContent = `${lastNum} ${operator}`;
    // evaluate();
}

function evaluate(){
    last.textContent = `${lastNum} ${currentOp} ${currentNum}`
    current.textContent = operate(currentOp, lastNum, currentNum);
};

enterBtn.addEventListener('click', () => evaluate());

//clear
clearBtn.addEventListener('click', () => clear());

function clear(){
    current.textContent = 0;
    last.textContent = " ";
    currentNum = 0;
    lastNum = 0;
};
//


function add(a, b){
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch (operator){
       case '+':
        return add(a, b)
        break;
       case '-':
        return subtract(a, b)
        break;
       case 'x':
        return multiply(a, b)
        break;
       case '/':
        if (b === 0) return null;
        else return divide(a, b)
        break;
       default:
        return null;
        break; 
    }
};