const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [3, 5, 7, 9, 11];

console.log("\n destructuring  ############################################\n");
const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros);

console.log("\ndeclarando  ############################################\n");
const num1 = 1
const num2 = 2
console.log (num1, num2);

console.log("\ndeclarando  com destructuring #############################\n");
const [num1b, num2b] = [1, 2]
console.log (num1b, num2b);