
const categories = [
    {
    name: 'Barba',
    services: [
        {name: 'Barboterapia', description: 'Barboterapia relaxante', price: 30, minutes: '40 minutos' },
        { name: "Barba na Navalha", description: "Técnica Tradicional de barbear", price: 20, minutes: '40 minutos' },
        { name: "Barba na Navalha + Pigmentação", description: "Massagem, navalha e pigmentação", price: 45, minutes: '50 minutos' },
        { name: "Pacote de Barba", description: "4 serviços de barba (Massagem, navalha, pigmentação e corte de cabelo)", price: 60, minutes: '50 minutos' }
    ]
  },

  {
    name: 'Cabelo',
    services: [
        { name: "Corte na tesoura", description: "Corte clássico todo na tesoura", price: 30, minutes: '40 minutos' },
        { name: "Corte na máquina", description: "Corte todo na máquina", price: 30, minutes: '35 minutos' },
        { name: "Corte infantil", description: "Corte de cabelo kids", price: 20, minutes: '30 minutos' },
        { name: "Corte + Sobrancelha", description: "Corte de cabelo e sobrancelha na navalha ", price: 35, minutes: '40 minutos' }
    ]
  },

  {
    name: 'Sobrancelha',
    services: [
        { name: "Sobrancelha na navalha", description: "Aparar e modelar", price: 20, minutes: '15 minutos' },
        { name: "Design de sobrancelha com henna", description: "Aparar, Modelar e pigmentar com henna", price: 20, minutes: '15 minutos' },
    ]
  },

  {
    name: 'Escova Progressiva',
    services: [
        { name: "Escova Progressiva", description: "Técnica de alisar cabelos e ajuda a diminuir o volume dos fios", price: 50, minutes: '50 minutos' },
        { name: "Corte + Escova Progressiva", description: "Corte de cabelo e progressiva", price: 60, minutes: '60 minutos' },
    ]
  },
]

const accordion = document.getElementById('accordion')


accordion.innerHTML = categories.map(category => `
  <div class="accordion-item">
    <button class="accordion-header">${category.name}</button>
    <div class="accordion-content">
      ${category.services.map(s => `
        <div class="accordion-info">
            <h3> ${s.name}</h3>
            <p>${s.description}</p>
            <p><i class="fa fa-clock"></i>${s.minutes}</p>
            <p><i class="fa fa-dollar-sign"></i> a partir de R$ ${s.price.toFixed(2).replace('.', ',')}</p>
        </div>

        <div class="reserve-div">
            <a href="agendamento.html" class="reserve-btn">
            <i class="fa fa-calendar-check"></i> 
            Reservar
            </a>
        </div>
        `).join("")}
    </div>
  </div>
`).join("");

// Lógica do accordion
const headers = document.querySelectorAll('.accordion-header')

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('open')
    })
})