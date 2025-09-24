import { formatarDataParaBackend } from '../public/js/utils.js';

const baseURL = 'http://localhost:3000'

//* Create dos dados dos agendamentos
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

//* Buscando horarios 
export async function buscarHorarios(data) {
    const dataFormatada = formatarDataParaBackend(data)
    const res = await fetch(`${baseURL}/api/agendamentos?data=${dataFormatada}`)
    return res.json()
}   

//* Buscar agendamentos usando o telefone registrado
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

//* Pegar agendamento e mostrar no meus agendamentos
export async function pegarAgendamento(telefone) {
    // passando o telefone pela url
    const res = await fetch(`${baseURL}/api/agendamentos?clientPhone=${encodeURIComponent(telefone)}`) 
    if(!res.ok) throw new Error('Erro na API');
    return await res.json()
}