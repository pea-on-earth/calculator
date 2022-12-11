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