'use strict'

import {pesquisarCep} from './brasilapi.js'

const preencherFormulario = async () => {

    const cepDigitado = document.getElementById('cep').value

    const cep = await pesquisarCep(cepDigitado)

    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
    console.log('teste')
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)