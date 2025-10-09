window.addEventListener("DOMContentLoaded", () => {
  if (window.VMasker) {
    const telefoneInput = document.querySelector("#clientPhone")
    const telefoneInputModal = document.querySelector('#clientPhoneModal')
    if (telefoneInput) {
      VMasker(telefoneInput).maskPattern("(99) 99999-9999")
    }
    if(telefoneInputModal) {
      VMasker(telefoneInputModal).maskPattern("(99) 99999-9999")
    }
  }
})