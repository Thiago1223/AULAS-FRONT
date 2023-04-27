'use strict'

// const nome = [2, 'SENAI', true, 78]

// const aluno = {nome: 'Thiago', nota:10, aprovado: true}

// // JSON
// const ds2t = [
//     {
//         nome: 'Thiago', 
//         nota: 10, 
//         aprovado: true, 
//         UC: ['PWFE', 'PWBE', 'BCD', 'INDMO']
//     },
//     {
//         nome: 'Freitas', 
//         nota: 8, 
//         aprovado: false
//     }
// ]

// const valores = [34, 54, 32, 43, 90]

// const limite = valores.length
// let contador = 0
// const valoresFrete = []
// const valorFrete = 2

// while (contador < limite) {
//     valoresFrete[contador] = valores[contador] + valorFrete
//     contador++
// }

// const limite = valores.length
// const valoresFrete = []
// const valorFrete = 2

// for (let contador = 0; contador < limite; contador++) {
//     valoresFrete[contador] = valores[contador] + valorFrete
// }

// const adicionaFrete = (valor) => valor + 2
// const valoresFrete = valores.map(adicionaFrete)

// console.log(valoresFrete);
import {produtos} from "./produtos.js"
import "./card.js"

const criaCard = (produto) => {
    const card = document.createElement('card-thiago')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    card.foto = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    card.nome = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    card.turma = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    card.preco = 'R$ ' + produto.price.toFixed(2)

    card.append(foto, titulo, descricao, preco)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)

    container.replaceChildren(...cards)
}

carregarProdutos()