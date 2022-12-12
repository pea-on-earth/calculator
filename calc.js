let result = document.getElementById("result");
const numBtns = document.querySelectorAll(".digit");
const opBtns = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");

numBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let num1 = button.textContent;
        result.textContent = num1;
        console.log(button.textContent);
    })
});

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let op = button.textContent;
        result.textContent += " " + op;
        console.log(button.textContent);
    })
});

clearBtn.addEventListener('click', () => {
    clear();
});

function clear(){
    result.textContent = " ";
};



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
       case '*':
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