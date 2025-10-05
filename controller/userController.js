const User = require('../models/user')

const addUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const user = await User.create({
            name: name,
            email: email,
            phone: phone
        })
        res.status(201).send(`user with name ${name} added`)
    } catch (err) {
        console.error(' Error in addUser:', err);
        res.status(500).send(err)
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        console.error(' Error in getUsers:', err);
        res.status(500).send(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({ where: { id: req.params.id } })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    addUser,
    getUsers,
    deleteUser
}
