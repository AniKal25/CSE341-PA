const routes = require('express').Router();
const ward_members = require('./info/ward_members')

routes.get('/', (req, res) => {
    res.send('This is working as it should! => We will be working on our project now 😊');

});

routes.use('/info', ward_members);



module.exports = routes;