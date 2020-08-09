'use strict';

const express = require('express');
const ctl_scraping = require('../scraping/ctl_scraping');
const router = express.Router();

router.get('/', ctl_scraping.get);

module.exports = router;