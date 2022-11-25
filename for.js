const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

///////////////////

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

/////////////

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let mediaNotasArrays = 0; 

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      mediaNotasArrays += notasGerais[i][j]/notasGerais[i].length;
    }
  }

  mediaNotasArrays = mediaNotasArrays/notasGerais.length

  console.log(mediaNotasArrays)

  //ex de decremento 
const numbers = [100, 200, 300, 400, 500, 600];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

//decremento de dois ou mais 
const decremento = [100, 200, 300, 400, 500, 600];
                                         // i--
for (let i = decremento.length - 1; i >= 0; i -= 2) {
  console.log(decremento[i]);
}

//alterando condicional 
const condicional = [100, 200, 300, 400, 500, 600];

for (let i = condicional.length - 1; condicional[i] >= 300; i -= 2) {
  console.log(condicional[i]);
}

//criando array com números pares de 0 a 100 
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);