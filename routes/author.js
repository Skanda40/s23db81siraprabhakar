var express = require('express');
const author_controlers= require('../controllers/author');
var router = express.Router();
/* GET costumes */
router.get('/', author_controlers.author_view_all_Page );
router.get('/detail', author_controlers.author_view_one_Page);
router.get('/create', author_controlers.author_create_Page);
router.get('/update', author_controlers.author_update_Page);
router.get('/delete', author_controlers.author_delete_Page);
module.exports = router;