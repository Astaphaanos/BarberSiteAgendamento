import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

import db from './db/db.js'
import Agendamento from './models/Agendamento.js'
import agendamentoRoutes from './router/agendamentoRoutes.js'

const app = express()

// Middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', agendamentoRoutes)

//Arquivos estáticos
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '../frontend')))

// Conexão com banco de dados
db.sync().then(() => {
    console.log('Conectado ao Banco de Dados...')
    app.listen(3000)
}).catch((error) => console.log(error))
