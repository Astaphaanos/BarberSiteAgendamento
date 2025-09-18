flatpickr("#dataAgendamento", {
  dateFormat: "d/m/Y", 
  minDate: "today",  
  onChange: function(selectedDates, dateStr) {
    carregarHorarios(dateStr);
  }
});



