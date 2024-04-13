const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'ex_tasks_db',
    'root',
    'root',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3307
    }
)

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to database.")
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    sequelize,
    connectToDb
}