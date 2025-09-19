
import AgendamentoController from '../controllers/AgendamentoController.js'
import { Router } from 'express'
 
const router = Router()

router.get('/agendamentos', AgendamentoController.buscarHorarios)
router.post('/agendamentos', AgendamentoController.createAgendamento) 

export default router