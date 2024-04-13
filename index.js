const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const { sequelize, connectToDb } = require('./lib/db')

const todoRoutes = require('./routes/todoRoutes')

app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({ message: "Hello World" })
})

app.use('/api/todos', todoRoutes)

app.get('/', (req,res) => {
    res.status(200).json({ message: "Hello World" })
})

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
    await connectToDb()
})