import { formatarDataParaBackend } from '../public/js/utils.js';

const baseURL = 'http://localhost:3000'

export async function registrarAgendamento(dados) {
    try {
        const res = await fetch(`${baseURL}/api/agendamentos`, {
             method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dados)
        })
        const result = await res.json()
        return result
    } catch(e) {
        console.log('Erro ao conectar com a API', err)
        throw new Error('Erro ao conectar com a API')
    }

}

export async function buscarHorarios(data) {
    const dataFormatada = formatarDataParaBackend(data)
    const res = await fetch(`${baseURL}/api/agendamentos?data=${dataFormatada}`)
    return res.json()
}   

export async function buscarTelefone(telefone) {
     try {
        const res = await fetch(`${baseURL}/api/buscartelefone`, {
            method: 'POST',
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({clientPhone: telefone})
        })
        
        if(!res.ok) {
            throw new Error('Erro ao buscar telefone')
        }
        return await res.json()

    } catch(e) {
        console.log('Erro ao buscar telefone na API', e)
        throw e;
    } 
}