import { registrarAgendamento } from '../../services/api.js'
import { formatarDataParaBackend } from '../js/utils.js'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-agendamento')

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault()

            const dados = {
                clientName: document.getElementById('clientName').value,
                clientPhone: document.getElementById('clientPhone').value.replace(/\D/g, ""),
                data: formatarDataParaBackend(document.getElementById('dataAgendamento').value),
                time: document.getElementById('hora').value
            }

            try {
                const result = await registrarAgendamento(dados)

                if (result && result.id) { // Assumindo que o ID é retornado
                    alert('✅ Agendamento criado com sucesso')
                    console.log(result)
                    window.location.href = "../public/pages/meus-agendamentos.html"
                } else {
                    alert(`⚠️ Erro ${result.error || 'desconhecido'}`)
                }
            } catch(err) {
                alert('Erro ao criar agendamento. Tente novamente mais tarde.')
            }
        })
    }
})