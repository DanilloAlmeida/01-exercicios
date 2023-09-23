function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto("Oi");
imprimeTexto("Agora oi de novo");

/*******************************************************************************/

function soma(){
    const resultado = 2;    
    // console.log(resultado);
    return resultado;
}
// console.log(soma());
// soma();

imprimeTexto(soma());
/*******************************************************************************/
//num1 e num2 são parâmetros;
function somaV2(num1, num2){
    return num1+num2;
}
// 2 e 3 são argumentos
imprimeTexto(somaV2(2, 3));
/*******************************************************************************/

/*******************************************************************************/