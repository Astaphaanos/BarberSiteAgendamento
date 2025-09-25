
document.addEventListener('DOMContentLoaded', async() => {
    const telefone = localStorage.getItem('clientPhone');

    const res = await fetch(`http://localhost:3000/api/agendamentos/cliente?clientPhone=${telefone}`);    
    const agendamento = await res.json();

    const container = document.getElementById('listaAgendamento');
    container.innerHTML = '';

    agendamento.forEach(a => {
        const card = document.createElement('div');
        card.className = 'agendamento-card';
        card.innerHTML = `
        <div class="agendamento-info">
            <h4>${a.service}</h4>
            <p>${formataData(a.data)} às ${a.time}</p>
            <p class="price">
                <i class="fa fa-dollar-sign"></i> 
                a partir de R$ ${a.price}.00
            </p>
        </div>

        <div class="status">
            <p>Agendado</p>
        </div>
        `;
        container.appendChild(card);
    });
})

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
