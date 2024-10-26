//- Напишіть 5 прикладів анонімної функції
/* (function(){
    console.log('приклад1');
})
(function(){
    console.log('приклад2');
})
(function(){
    alert('приклад3')
})
(function (){
    prompt('приклад4')
})
(function(){
    confirm('приклад5')
})
 */


//- Напишіть 5 прикладів самовикликаючої функції
/*  (function(){
    console.log('приклад1');
})()
(function(){
    console.log('приклад2');
})()
(function(){
    alert('приклад3')
})()
(function (){
    prompt('приклад4')
})()
(function(){
    confirm('приклад5')
})() */



// - Повторіть колбек функцію bubbleSort з лекції 


function bubbleSort(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const compRes = callback(arr[j], arr[j + 1])
            if (compRes) {
                let box = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = box
            }
        }
    }
    return arr
}
let refuge = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

function FuncA(a, b) {
    return a > b
}

function FuncB(a, b) {
    return a < b
}

const arrA = bubbleSort(refuge, FuncA)

console.log('від меншого до більшого\n', arrA);


/* 
// Калькурятор.
//  Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//  та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//  Результат повернути (return) і вивести
//  На основі цього завдання зробіть 3 приклади:
// - Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)
console.log('Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)');

function calc(num1, num2, action) {
    function add() { return num1 + num2 }
    function min() { return num1 - num2 }
    function mul() { return num1 * num2 }
    function dil() { return num1 / num2 }
    switch (action) {
        case '+': return add();
        case '-': return min();
        case '*': return mul();
        case '/': return dil();
    }
}
console.log(calc(+prompt('число-1:'), +prompt('число-2:'), prompt("Вкажіть бажану дію:\nМожливі наступні дії: (+, -, /, *)")));


//- Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)
console.log('Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)');

function add2(num1, num2) { return num1 + num2 }
function min2(num1, num2) { return num1 - num2 }
function mul2(num1, num2) { return num1 * num2 }
function dil2(num1, num2) { return num1 / num2 }

function calc2(num1, num2, action) {

    switch (action) {
        case '+': return add2(num1, num2);
        case '-': return min2(num1, num2);
        case '*': return mul2(num1, num2);
        case '/': return dil2(num1, num2);
    }
}
console.log(calc2(+prompt('число-1:'), +prompt('число-2:'), prompt("Вкажіть бажану дію:\nМожливі наступні дії: (+, -, /, *)")));

// - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), 
console.log('Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), ');

let num1 = +prompt('число-1:');
let num2 = +prompt('число-2:');
let numAction = prompt("Вкажіть бажану дію:\nМожливі наступні дії: (+, -, /, *)");

function calc3(num1, num2, action) {
    return action(num1, num2);
}

function add3(num1, num2) { return num1 + num2; }
function min3(num1, num2) { return num1 - num2; }
function mul3(num1, num2) { return num1 * num2; }
function dil3(num1, num2) { return num1 / num2; }


let actionCallback;
switch (numAction) {
    case "+": actionCallback = add3;
        break;
    case "-": actionCallback = min3;
        break;
    case "*": actionCallback = mul3;
        break;
    case "/": actionCallback = dil3;
        break;
    default: console.log("Невідома дія!");
        actionCallback = () => "Невідома дія!";
}

console.log(calc3(num1, num2, actionCallback)); */