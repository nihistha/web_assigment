const router = require('express').Router()

const user_controller = require('../controller/user_controller');

//MAke a create user API

router.post('/create',user_controller.createUser)

module.exports = router;