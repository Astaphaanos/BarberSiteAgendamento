
import Agendamento from "../models/Agendamento.js"

class AgendamentoController {
    
    static async createAgendamento(req,res) {
        const {clientName, clientPhone, data, time} = req.body

        if(!clientName || !clientPhone || !data || !time) {
            return res.status(400).json({error: 'Preencha todos os campos'})
        }

        try {
            const novoAgendamento = await Agendamento.create({clientName, clientPhone, data, time})
            return res.status(201).json(novoAgendamento)
        }catch(err) {
            return res.status(500).json({error: 'Erro ao criar agendamento'})
        }
    }

    static async buscarHorarios(req, res) {
        const {data} = req.query
        if(!data) return res.status(400).json({error: 'Data não informada'})

        try {
            const agendamentos = await Agendamento.findAll({where: {data: data}})
            const horariosOcupados = agendamentos.map(a => a.hora)
            return res.json(horariosOcupados)
        } catch {
            return res.status(500).json({ error: 'Erro ao buscar horários' })
        }
    }
}



export default AgendamentoController