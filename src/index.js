const express = require("express")
const app = express()
require("../src/db/mongoose")

const User = require("../src/modals/User")
const Tasks = require("../src/modals/tasks")
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body, "Body")
    let user = new User(req.body);
    user.save()
        .then((user) => {
            res.status(200).send(user);
        })
        .catch(err => {
            // console.log("Error===>",err)
            res.status(400).send(err)
        })
})

app.post('/tasks', (req, res) => {
    let task = new Tasks(req.body)
    task.save()
        .then(task => {
            res.send(task)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

app.get('/user', (req, res) => {
    User.find({})
        .then(users => {
            if (!users) {
                return res.status(404).send()
            }
            res.send(users)
        })
        .catch(err => {
            res.status(500).send()
        })
})


app.get('/userDetails/:id', (req, res) => {
    console.log(req.params)
    let ids = req.params.id
    User.findById(ids)
        .then(user => {
            if (!user) {
                return res.status(404).send()
            }
            res.send(user)
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        })
})


app.get('/allTasks', (req, res) => {
    Tasks.find({})
        .then(tasks => {
            if (!tasks) {
                return res.status(404).send()
            }
            res.send(tasks)
        })
        .catch(err => {
            res.status(500).send()
        })
})

app.get('/taskDetail/:id', (req, res) => {
    console.log(req.params)
    let ids = req.params.id
    Tasks.findById(ids)
        .then(task => {
            if (!task) {
                return res.status(404).send()
            }
            res.send(task)
        }).catch(err => {
            console.log(err)
            res.status(500).send()
        })
})