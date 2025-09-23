
import Agendamento from "../models/Agendamento.js"

class AgendamentoController {
    
    //* Criar agendamento
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

    //* Buscar horários para agendamento
    static async buscarHorarios(req, res) {
        const {data} = req.query
        if(!data) return res.status(400).json({error: 'Data não informada'})

        try {
            const agendamentos = await Agendamento.findAll({where: {data: data}})
            const horariosOcupados = agendamentos.map(a => a.time)
            return res.json(horariosOcupados)
        } catch {
            return res.status(500).json({ error: 'Erro ao buscar horários' })
        }
    }

    //* Buscar telefone no modal
    static async buscarTelefone(req,res) {
        const {clientPhone} = req.body

        try {
            const telefone = await Agendamento.findAll({where: {clientPhone: clientPhone}})
            return res.json(telefone)
        } catch(e) {
            return res.status(404).json({error: 'Erro ao buscar telefone'})
        }
    }
}



export default AgendamentoController