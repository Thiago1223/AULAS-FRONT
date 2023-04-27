'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'

// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    const nomeAluno = nome;
    const notaAluno = nota;
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__nome">${nomeAluno}</h2>
                         <span class="aluno__nota">${notaAluno}</span>`
    if (nomeAluno == '' || notaAluno == '') {
        alert('ERRO: Você deixou de entrar com algum valor.')
    } else if (isNaN(notaAluno)) {
        alert('ERRO: Você não digitou um número.')
    } else if(notaAluno < 0 || notaAluno > 10) {
        alert('ERRO: As notas devem ser de 0 e 10.')
    } else {
        if (notaAluno < 5) {
            novaDiv.classList.add('vermelho')
        } else {
            novaDiv.classList.add('azul')
        }
        container.appendChild(novaDiv)
    }                  

}

const handleClick = () => {
    const nome = prompt('Digite o nome do Aluno')
    const nota = prompt('Digite a nota do Aluno')
    adicionarCard(nome, nota)
}

adicionar.addEventListener('click', handleClick)