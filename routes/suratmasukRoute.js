const express = require('express');
const suratController = require('./../controllers/suratController');

const router = express.Router();

router
  .route('/')
  .get(suratController.getAllSurat)
  .post(suratController.createSurat);

module.exports = router;
