const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('This is working as it should! => We will be working on our project now 😊');
    
   
});module.exports = routes;