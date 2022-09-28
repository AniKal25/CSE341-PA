const routes = require('express').Router();
const {getAllMembers} = require('../../controllers/info/ward_members');


routes.get('/', getAllMembers);



module.exports = routes;