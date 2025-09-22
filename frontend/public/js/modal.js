document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const confirmarTelefone = document.getElementById('confirmarTelefone');

    document.getElementById('meusAgendamentos').addEventListener('click', () => {
        modal.classList.add('show')
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show')
    })

    confirmarTelefone.addEventListener('click', (e) => {
        e.preventDefault();

        const telefone = document.getElementById('clientPhone').value.replace(/\D/g, "");

        if(!telefone) {
            alert('Digite um número válido')
            return
        }
        
        modal.classList.remove('show')
    })
})