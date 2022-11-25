const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

// const novasNotas = [5, ...notas];
// const novasNotas = [...notas, 10];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

//////////////////
let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);
