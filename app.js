const express = require('express')
const cors = require('cors')
const path = require('path')
const sequelize = require('./utils/db-connection')
const User = require('./models/user')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', userRoutes)

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running')
    })
})
