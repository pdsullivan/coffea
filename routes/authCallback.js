let express = require('express');
let router = express.Router();

router.get('/authCallback', (req, res, next) => {
    res.send({});
});

module.exports = router;
