const alunos = ['Ana', 'Marcos', 'Maria', 'João']
const medias = [7, 4.5, 6.9, 7.1]

const reprovados = alunos.filter((_, indice)=> {
    return medias[indice] < 7
})

console.log(reprovados)