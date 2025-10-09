
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

    clientPhone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },

    service: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    time: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Agendamento