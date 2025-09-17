
import db from '../db/db.js'
import { DataTypes } from "sequelize";


const Agendamento = db.define('Agendamento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    clientName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    clientName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    data: {
        type: DataTypes.DATE,
        allowNull: false
    },

    time: {
        type: DataTypes.TIME,
        allowNull: false
    }
})

export default Agendamento