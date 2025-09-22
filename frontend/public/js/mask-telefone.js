window.addEventListener("DOMContentLoaded", () => {
  if (window.VMasker) {
    const telefoneInput = document.querySelector("#clientPhone")
    if (telefoneInput) {
      VMasker(telefoneInput).maskPattern("(99) 99999-9999")
    }
  }
})