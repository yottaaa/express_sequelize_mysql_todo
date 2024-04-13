const express = require('express')
const router = express.Router()
const Task = require('../models/todo')

// GET: Fetch all tasks
router.get('/', async (req,res) => {
    const tasks = await Task.findAll({
        order: [
            ["createdAt", "DESC"]
        ]
    })
    res.status(200).json(tasks)
})

// POST: Create task
router.post('/', async (req,res) => {
    try {
        const data = req.body

        const newTask = Task.build({
            "content": data.content,
            "description": data.description
        })

        await newTask.save()

        res.status(201).json({ message: "Task created successfully." })
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
})

// GET: Fetch specific task
router.get('/:id', async (req,res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(task)
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
})

// PUT: Update specific task
router.put('/:id', async (req,res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            }
        })
        const data = req.body

        await task.set({
            "content": data.content,
            "description": data.description,
            "is_completed": data.is_completed
        })

        await task.save()

        res.status(200).json({ message: `Task ID ${task.id} is updated.` })

    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
})

// DELETE: Remove specific task
router.delete('/:id', async (req,res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            }
        })

        await task.destroy()

        res.status(204)
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
})

// GET: Search specific task/s
router.get('/:keyword', (req,res) => {

})

module.exports = router