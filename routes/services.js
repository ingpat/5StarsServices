var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
		
			res.render('services/index');

});

router.get('/servicetraiteur', function(req, res, next) {
		
			res.render('services/servicetraiteur');

});
module.exports = router;