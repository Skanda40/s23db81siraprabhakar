var express = require('express');
const author_controlers= require('../controllers/author');
var router = express.Router();
/* GET costumes */
router.get('/', author_controlers.costume_view_all_Page );
module.exports = router;

router.get('/detail', author_controlers.author_view_one_Page);

