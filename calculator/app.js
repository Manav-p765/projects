let aac = document.querySelector('.acc')
let del = document.querySelector('.Del')
let equ = document.querySelector('.equal')

let inputValues = [];

document.querySelectorAll('.keys').forEach(keys => {
    keys.addEventListener('click', () => {
        const value = keys.dataset.value;
        inputNum(value);
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        const operation = button.dataset.value;
        inputNum(operation);
    });
});


aac.addEventListener('click', () => {
    inputValues = [];
    display(inputValues);
});


del.addEventListener('click', () => {
    inputValues.pop();
    display();
})


function inputNum(num) {
    let value = num;
    if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(inputValues.at(-1))) {
        console.error("Cannot add consecutive operators.");
        return;
    }
    inputValues.push(value);
    display();
}


function display() {
    let iptDly = document.querySelector('.display');
    iptDly.innerText = inputValues.join('');
    iptDly.classList.add('inputs');
}

equ.addEventListener("click", () => {
    try {
        const result = eval(inputValues.join(''));
        inputValues = [result];
        display(inputValues);
    } catch (e) {
        console.error("Invalid expression");
        display(["Error"]);
    }
});



// 1. create a function to divide diffrent operations like equal to separate them and call that function in addEventListener
// 2. remove comma from display
