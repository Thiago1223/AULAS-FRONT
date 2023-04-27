'use strict'

export const pesquisarCep = async (cepPesquisa) => {
    const url = `https://brasilapi.com.br/api/cep/v1/${cepPesquisa}`
    const response = await fetch(url)
    const data = await response.json()
    
    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municipio: data.city,
        estado: data.state
    }
}