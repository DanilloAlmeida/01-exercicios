function apresentar(nome){
    return `Olá! Meu nome é ${nome}`;
}

const apresentacao = function (nome){
    return `Olá! Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Olá! Meu nome é ${nome}`;

console.log("\nTestando apresentar ##########################################\n")
console.log(apresentar('Danillo'));


console.log("\nTestando apresentacao ########################################\n")
console.log(apresentacao("Danillo"));


console.log("\nTestando apresentarArrow #####################################\n")
console.log(apresentacao("Danillo"));

function somar(num1, num2){
    return num1 + num2;
}

const soma = function (num1, num2){
    return num1 + num2;
}

const somarArrow = (num1, num2) => num1 + num2;

console.log("\nTestando somar ##########################################\n")
console.log(somar(3, 5));


console.log("\nTestando soma ########################################\n")
console.log(soma(3, 5));


console.log("\nTestando somarArrow #####################################\n")
console.log(somarArrow(3, 5));