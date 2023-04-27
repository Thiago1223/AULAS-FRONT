'use strict'

class card extends  HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.nome = 'Nome do Aluno'
        this.turma = 'Nome da Turma'
        this.foto = null
    }

    static get observedAttributes(){
        return ['nome', 'turma', 'foto']
    }

    attributeChangedCallback(nameAttribute, oldValue, newValue){
        this[nameAttribute] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                cursor: pointer;
            }
            .card__title{
                font-size: 1.5rem;
                font-weight: 600;
            }
            .card__text{
                color: #000;
            }
            .card__image{
                height: 200px;
                width: 200px;
                background-image: url(${this.foto});
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
            .card__price{
                width: 100%;
                font-size: 1.5rem;
                font-weight: 900;
            }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__title')
        nomeAluno.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.turma

        const preco = document.createElement('div')
        preco.classList.add('card_price')
        preco.textContent = this.preco

        card.append(imagem, nomeAluno, turma, preco)

        return card
    }

}

customElements.define('card-thiago', card)