const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/discord', (req, res) => {
    res.send("Discord")
})

module.exports = router;