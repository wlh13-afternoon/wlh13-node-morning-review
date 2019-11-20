const express = require('express')
const app = express()
app.use(express.json())
const PORT = 5000
const userCtrl = require('./userControllers')

app.get('/api/users', userCtrl.getUsers )
app.post('/api/users', userCtrl.addUser)
// app.put('/api/users', userCtrl.updateUser)


app.listen(PORT, () => console.log(`Powerman ${PORT}`))

