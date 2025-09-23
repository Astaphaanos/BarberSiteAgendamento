
import AgendamentoController from '../controllers/AgendamentoController.js'
import { Router } from 'express'
 
const router = Router()

router.get('/agendamentos', AgendamentoController.buscarHorarios)
router.post('/agendamentos', AgendamentoController.createAgendamento) 
router.post('/buscartelefone', AgendamentoController.buscarTelefone)

export default router