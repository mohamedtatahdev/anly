const router = require('express').Router();
const activities = require('./api.activities');

router.use('/activities', activities);

module.exports = router;