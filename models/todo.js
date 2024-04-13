const { sequelize } = require('../lib/db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('Task', {
    content: {
        type: DataTypes.STRING,
        validate: {
            max: 150
        }
    },
    description: {
        type: DataTypes.TEXT
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

// sequelize.sync()
module.exports = Task