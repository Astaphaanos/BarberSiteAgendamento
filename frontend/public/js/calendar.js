flatpickr("#dataAgendamento", {
  dateFormat: "d/m/Y", 
  minDate: "today",  
  onChange: function(selectedDates, dateStr) {
    carregarHorarios(dateStr);
  }
});

const horariosDisponiveis = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00", "19:00"
];

function carregarHorarios(data) {
    const container = document.getElementById('horarios');
    container.innerHTML = '';

    fetch(`/api/horarios?data=${data}&barbeiro=${barbeiroId}`)
    .then(res => res.json())
    .then(ocupados => {
        container.innerHTML= '';

        horariosDisponiveis.forEach(hora => {
            const div = document.createElement('div');
            div.classList.add('horario');
            div.textContent = hora;
    
            if(ocupados.includes(hora)) {
                div.classList.add('ocupado');
            } else {
                div.addEventListener('click', () => {
                    document.querySelectorAll('.horario').forEach(el => el.classList.remove("selecionado"));
                    div.classList.add('selecionado');
                    document.getElementById('horaSelecionada').value = hora;
                })
            }
            container.appendChild(div);
        });
    });
}