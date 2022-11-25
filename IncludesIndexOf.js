const alunos = ['Lucas', 'Juliana', 'Ana']
const medias = [10, 8, 5]
const listaDeAlunosEMedias = [alunos, medias]

const exibeNomeENota = (aluno) => {
    if(listaDeAlunosEMedias[0].includes(aluno)){ //verifica se está INCLUÍDO no array

        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]

        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno) //indexof trás o index do elemento selecionado com includes
        const mediaDoAluno = medias[indice]
       
        console.log(`${aluno} está cadastrado! A média dele é: ${mediaDoAluno}.`)

    } else{
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota('Juliana')