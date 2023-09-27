const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const ListaDeAlunosEMedia = [alunos, medias];
console.log(" LISTA DE ALUNOS -----------------------------------------------------\n\n");

console.log(`Aluno[0]: ${ListaDeAlunosEMedia[0][0]}\t\t| Nota[0]: ${ListaDeAlunosEMedia[1][0]}`);
console.log(`Aluno[1]: ${ListaDeAlunosEMedia[0][1]}\t| Nota[1]: ${ListaDeAlunosEMedia[1][1]}`);
console.log(`Aluno[2]: ${ListaDeAlunosEMedia[0][2]}\t\t| Nota[2]: ${ListaDeAlunosEMedia[1][2]}`);
console.log(`Aluno[3]: ${ListaDeAlunosEMedia[0][3]}\t\t| Nota[3]: ${ListaDeAlunosEMedia[1][3]}`);
console.log("\n\n CONSULTA DE ALUNOS -----------------------------------------------------\n");
function exibeNomeENota (aluno){
    if (ListaDeAlunosEMedia[0].includes(aluno)) {
        console.log(`${aluno} está na lista! `);
        const indice = ListaDeAlunosEMedia[0].indexOf(aluno);
        console.log(`Nota de ${aluno}: ${ListaDeAlunosEMedia[1][indice]}`);

    }else{
        console.log(`${aluno} NÃO está na lista! `);
    }
}
exibeNomeENota ("Jão");
exibeNomeENota ("João");
exibeNomeENota ("Caio");