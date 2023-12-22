const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [3, 5, 7, 9, 11];
console.log(numerosPares)
numerosPares.push(12,14,16);
console.log(numerosPares)

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


console.log("\ntestando com objetos #############################\n");
const pessoa1={
    nome: 'Danillo',
    idade: 25
}
console.log(pessoa1)
// const pessoa2 = pessoa1
// const {pessoa2} = pessoa1
let { idade } = pessoa1
idade = pessoa1.idade + 1
console.log(idade)
pessoa1.idade = pessoa1.idade +1
console.log(pessoa1.idade)
console.log(pessoa1)