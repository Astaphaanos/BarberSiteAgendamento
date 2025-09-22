import { formatarDataParaBackend } from "../public/js/agendamento.js"

const baseURL = 'http://localhost:3000'

export async function registrarAgendamento() {
    const form = document.getElementById('form-agendamento')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const dados = {
            clientName: document.getElementById('clientName').value,
            clientPhone: document.getElementById('clientPhone').value.replace(/\D/g, ""),
            data: formatarDataParaBackend(document.getElementById('dataAgendamento').value),
            time: document.getElementById('hora').value
        }

        try{
            const res = await fetch(`${baseURL}/api/agendamentos`, {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(dados)
            })
            const result = await res.json()

            if(res.ok){
                alert('✅ Agendamento criado com sucesso')
                console.log(result)
                window.location.href = "../public/pages/meus-agendamentos.html"
            } else {
                alert('⚠️ Erro', + result.error);
            }
        } catch(err) {
            console.log('Erro ao conectar com a API', err)
        }
    })
}

export async function buscarHorarios(data) {
    const dataFormatada = formatarDataParaBackend(data)
    const res = await fetch(`${baseURL}/api/agendamentos?data=${dataFormatada}`)
    return res.json()
}   