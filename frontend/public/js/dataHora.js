import { buscarHorarios } from "../../services/api.js";

// Calendário flatpickr
flatpickr("#dataAgendamento", {
  dateFormat: "d/m/Y", 
  minDate: "today",  
  onChange: function(selectedDates, dateStr) {
    renderizarHorarios(dateStr);
  }
});

// Renderizar a hora quando selecionar a data
async function renderizarHorarios(data) {
    const horariosDiv = document.getElementById('horarios');
    if (!horariosDiv) return;

    horariosDiv.innerHTML = "";

    const ocupados = await buscarHorarios(data);

    const horariosDisponiveis = [
        "08:00","08:40", "09:00", "09:40", "10:00", "10:40", "11:00",
        "11:40","13:00", "13:40", "14:00", "14:40", "15:00", "15:40",
        "16:00","16:40", "17:00", "17:40", "18:00", "18:40"
    ];

    horariosDisponiveis.forEach((hora) => {
        const btn = document.createElement('button');
        btn.innerText = hora;
        
        if (ocupados.includes(hora)) {
            btn.disabled = true;
            btn.style.opacity = 0.5;
        } else {
            btn.addEventListener('click', () => selecionarHora(hora));
        }
        horariosDiv.appendChild(btn);
    });
}

// Selecionar a hora e armazenar no input que está hidden
function selecionarHora(hora) {
    const horaInput = document.getElementById('hora');
    if (horaInput) {
        horaInput.value = hora;
    }
}

// Renderiza os horários da data atual ao carregar a página
const dataInput = document.getElementById('dataAgendamento');
if (dataInput && dataInput.value) {
    renderizarHorarios(dataInput.value);
}
