const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testdatabse', 'root', 'bakor@11', {
    host: 'localhost',
    dialect: 'mysql'
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been made');
    } catch (err) {
        console.error('Unable to connect to the DatabaseError', err)
    }
})();

module.exports = sequelize