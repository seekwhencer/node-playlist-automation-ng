const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    var api_base = 'http://' + CONFIG.server.host + ':' + CONFIG.server.port + '/';
    var out = {
        api : [
            api_base + 'channels'
        ]
    };
    res.json(out);
});

module.exports = router;
