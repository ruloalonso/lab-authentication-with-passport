const passport = require('passport');
const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/sessions.controller');

router.get('/signup', sessionsController.create);
router.post('/signup', sessionsController.doCreate);

module.exports = router;