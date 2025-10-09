import { registrarAgendamento } from '../../services/api.js'
import { formatarDataParaBackend } from '../js/utils.js'

document.addEventListener('DOMContentLoaded', () => {
    //* Pegar o serviço escolhido pelo usuário pela url
    const params = new URLSearchParams(window.location.search);

    const serviceFromURL = params.get('service');
    const priceFromURL = params.get('price')

    const serviceInput = document.getElementById('serviceInput');
    const priceInput = document.getElementById('priceInput')

    if (serviceFromURL) serviceInput.value = serviceFromURL;
    if(priceFromURL) priceInput.value = priceFromURL

    //* Formulário
    const form = document.getElementById('form-agendamento')
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault()

            const dados = {
                clientName: document.getElementById('clientName').value,
                clientPhone: document.getElementById('clientPhone').value.replace(/\D/g, ""),
                service: document.getElementById('serviceInput').value,
                price: document.getElementById('priceInput').value.replace(/[^\d,]/g, ''),
                data: formatarDataParaBackend(document.getElementById('dataAgendamento').value),
                time: document.getElementById('hora').value
            }

            try {
                const result = await registrarAgendamento(dados)

                if (result && result.id) { // assumindo que o id é retornado
                    alert('✅ Agendamento criado com sucesso')
                    console.log(result)
                    window.location.href = "../pages/meus-agendamentos.html"
                } else {
                    alert(`⚠️ Erro ${result.error || 'desconhecido'}`)
                }
            } catch(err) {
                alert('Erro ao criar agendamento. Tente novamente mais tarde.')
            }
        })
    }
})