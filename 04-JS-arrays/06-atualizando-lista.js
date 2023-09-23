const nomes = [
    'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// console.log(" LISTA ORIGINAL ---------------------------->")
// console.log (nomes);
// console.log(" LISTA APÓS SPLICE ---------------------------->")
// console.log (nomes.splice);


const aquario = [
    'baleia', 'polvo', 'golfinho', 'tubarão'];

console.log(" LISTA ORIGINAL ---------------------------->");
console.log (aquario);
console.log(" LISTA APÓS SPLICE ---------------------------->");
// console.log (aquario.splice(1,0,"peixinho"));
console.log(" LISTA APÓS SPLICE v2 ---------------------------->");
aquario.splice(1,1,"peixinho");
console.log (aquario);
// console.log (aquario.splice(1,1,"peixinho"));