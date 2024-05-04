
const router =  require('express').Router();
const reservationsController = require('../controller/reservation_controller');

router.post('/create', reservationsController.createReservation);

module.exports = router;