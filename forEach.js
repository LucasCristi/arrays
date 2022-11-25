const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0

notas.forEach((nota, indice) => {
    somaDasNotas += nota
    // console.log(indice)
})

media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

// function imprimeNota(nota){
//     console.log(nota)
// }

// notas.forEach(imprimeNota)

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15