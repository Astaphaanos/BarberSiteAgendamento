import { buscarTelefone } from "../../services/api.js";

document.addEventListener("DOMContentLoaded", () => {
  // Coloque todo o seu código do modal aqui dentro
  const modal = document.getElementById("modal");
  const telefoneInput = document.getElementById("clientPhoneModal");
  const btnConfirmarTelefone = document.getElementById("btnConfirmarTelefone");
  const btnCloseModal = document.getElementById("btnCloseModal");
  const btnMeusAgendamentos = document.getElementById("btnMeusAgendamentos");

  // Verifique se o botão existe antes de adicionar o listener

  btnMeusAgendamentos.addEventListener("click", () => {
    modal.classList.add("show");
  });

  btnCloseModal.addEventListener("click", () => {
    modal.classList.remove("show");
    telefoneInput.value = "";
  });

  btnConfirmarTelefone.addEventListener("click", async () => {
    const telefone = telefoneInput.value.replace(/\D/g, "");
    if(telefone.length !== 11) {alert('Número inválido'); return}

    if(!telefone) {
      alert("Digite um número válido");
      return;
    }

    try {
      const resultado = await buscarTelefone(telefone);

      if (resultado && resultado.length > 0) {
        localStorage.setItem('clientPhone', telefone)
        window.location.href = "../pages/meus-agendamentos.html";
      } else {
        alert("Nenhum agendamento encontrado neste número.");
        return;
      }

      modal.classList.remove("show");
      telefoneInput.value = "";
      window.location.href = `../pages/meus-agendamentos.html?phone=${encodeURIComponent(telefone)}`;
    } catch (e) {
      alert("Erro ao buscar agendamentos. Tente novamente mais tarde!");
      console.error(e);
    }
  });
});
