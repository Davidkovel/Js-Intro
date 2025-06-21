// Task 1
const name = prompt("Введи своє ім'я:");
alert(`Привіт, ${name}!`);

// Task 2
const year_now = 2025;
const age = prompt("Введи рік свого народження:");

if (isNaN(age) || age < 1900 || age > year_now) {
    alert("Вік введено некоректно!");
} else {
    alert(`Тобі ${year_now - age} років!`);
}

// Task 3
alert(`Периметр квадрата: ${4 * Number(prompt("Введи сторону квадрата:"))} `);

// Task 4
const PI = 3.14;
const radius = prompt("Введи радіус кола:");

if (isNaN(radius) || radius <= 0) {
    alert("Радіус введено некоректно!");
}
else {
    alert(`Площа кола: ${PI * (Number(radius) ** 2)}`);
}

// Task 5
const length = prompt("Введи відстань між містами в км:");
const time = prompt("Введи час в годинах:");

if (isNaN(length) || isNaN(time) || time <= 0) {
    alert("Введено некоректні дані!");
} else {
    alert(`Необхідна швидкість: ${length / time} км/год`);
}

// Task 6
const dolarToEuro = 0.87;

let dollar = prompt("Введи суму в доларах:");

if (isNaN(dollar) || dollar <= 0) {
    alert("Введено некоректну суму!");
} else {
    alert(`Сума в євро: ${dolarToEuro * dollar}`);
}

// Task 7
const oneFileSizeMB = 820;

const memoryGB = prompt("Введи об'єм пам'яті в ГБ:");

if (isNaN(memoryGB) || memoryGB <= 0) {
    alert("Введено некоректний об'єм пам'яті!");
}
else{
    const result = Math.floor((memoryGB * 1024) / oneFileSizeMB);
    alert(`Кількість файлів: ${result} шт.`);
}

// Task 8
const money = prompt("Введи суму в гривнях:");

const chocolatePrice = prompt("Введи ціну шоколадки в гривнях:");

if (isNaN(money) || isNaN(chocolatePrice) || money <= 0 || chocolatePrice <= 0) {
    alert("Введено некоректні дані!");
}
else {
    const numberOfChocolates = Math.floor(money / chocolatePrice);
    const rest = money % chocolatePrice;
    alert(`Кількість шоколадок, що можна купити: ${numberOfChocolates} шт, решта: ${rest} грн.`);
}

// Task 9
const number = prompt("Введи трьохзначне число:");

if (isNaN(number) || number < 100 || number > 999) {
    alert("Введено некоректне число!");
} 
else {
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;
    alert(`Палідром трьохзначного числа: ${units}${tens}${hundreds}`);
}

// Task 10
const userNumber = prompt("Введи число:");

alert(`Число ${userNumber} є ${(userNumber % 2 === 0 && "парним") || "непарним"}.`);