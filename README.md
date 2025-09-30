# 📅 Sistema de Agendamento

Este é um sistema de **agendamento online** que permite que clientes selecionem serviços, visualizem informações como preço e data, e reservem seus horários de forma prática. Ele foi desenvolvido com foco em aprendizado e prática de conceitos de **desenvolvimento full-stack**, integrando **front-end, back-end e banco de dados**.

---

## 🚀 Funcionalidades

- **Listagem de serviços** com nome, preço e descrição.  
- **Formulário de agendamento** com validação de dados.  
- **Seleção de serviço**: ao clicar em reservar, o serviço escolhido é exibido no formulário para o cliente confirmar.  
- **CRUD de agendamentos**:  
  - Criar novos agendamentos.  
  - Listar agendamentos do cliente.  
  - Excluir agendamentos existentes.  
- **Integração com banco de dados** para armazenar e gerenciar os agendamentos.  
- **Feedback visual** para o usuário (mensagens de sucesso e erro).  

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Font Awesome** (ícones)  

### Back-end
- **Node.js**  
- **Express.js**  

### Banco de Dados
- **Sequelize ORM**  
- **SQLite / MySQL** (dependendo da configuração local)  

---

## 📂 Estrutura do Projeto
```bash tree -L 3
/frontend
├── public/
│ ├── pages/
│ │ ├── home.html
│ │ ├── meus-agendamentos.html
│ │ └── ...
│ ├── css/
│ ├── js/
│ └── ...
└── services/
└── api.js

/backend
├── models/
│ └── Agendamento.js
├── controllers/
│ └── AgendamentoController.js
├── routes/
│ └── agendamentoRoutes.js
├── database/
│ └── config.js
└── server.js
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado  
- Banco de dados configurado (SQLite ou MySQL)  

### Passo a passo
1. Clone este repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
2. Entre na pasta do projeto:
   ```bash
   cd seu-repo
3. Instale as dependências do back-end:
   ```bash
   cd backend
   npm install
4. Configure o banco de dados em backend/database/config.js.
5. Rode as migrations/seeds (se configuradas):
   ```bash
   npx sequelize db:migrate
6. Inicie o servidor:
   ```bash
   npm start
7. Abra o front-end no navegador (ex: via Live Server do VSCode) e use o sistema.

## 📖 Rotas Principais (API)
- GET /api/agendamentos/cliente?clientPhone=123456 → lista agendamentos de um cliente.
- POST /api/agendamentos → cria um novo agendamento.
- DELETE /api/agendamentos/:id → exclui um agendamento.


