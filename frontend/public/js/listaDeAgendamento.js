import { deletarAgendamento } from "../../services/api.js";

document.addEventListener('DOMContentLoaded', async() => {
    const telefone = localStorage.getItem('clientPhone');

    const res = await fetch(`http://localhost:3000/api/agendamentos/cliente?clientPhone=${telefone}`);    
    const agendamento = await res.json();

    const container = document.getElementById('listaAgendamento');
    container.innerHTML = '';

    agendamento.forEach(a => {
        const card = document.createElement('div');
        card.className = 'agendamento-card';
        card.id = `agendamento-${a.id}`;
        card.innerHTML = `
        <div class="agendamento-info">
            <h4>${a.service}</h4>
            <p>${formataData(a.data)} às ${a.time}</p>
            <p class="price">
                <i class="fa fa-dollar-sign"></i> 
                a partir de R$ ${a.price}.00
            </p>
        </div>

        <div class="lista-status-btn">
            <div class="status-btn">
                <p>Agendado</p>
            </div>

            <div class="delete-btn">
                <button id="btn-excluir-${a.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `;
        container.appendChild(card);
        btnDeletarAgendamento(a.id)
    });
})

function btnDeletarAgendamento(id) {
    const btn = document.getElementById(`btn-excluir-${id}`)

    if(btn) {
            btn.addEventListener('click', () => {
            deletarAgendamento(id)
        })
    }
}

function formataData(dataString) {
    if(!dataString) return '';

    const data = new Date(dataString);

    const dia = String(data.getDate()).padStart(2, '0'); // garantir 2 digitos no meu dia
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // mês começa em 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

function btnNovoAgendamento() {
    const btnAgendamento = document.getElementById('btnNovoAgendamento')
    btnAgendamento.addEventListener('click', () => {
        window.location.href = '../pages/home.html'
    })
}
btnNovoAgendamento()
