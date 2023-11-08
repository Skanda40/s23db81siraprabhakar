var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var author_controller = require('../controllers/author'); 
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/author', author_controller.author_create_post);
// DELETE request to delete Costume.
router.delete('/author/:id', author_controller.author_delete);
// PUT request to update Costume.
router.put('/author/:id', author_controller.author_update_put);
// GET request for one Costume.
router.get('/author/:id', author_controller.author_detail);
// GET request for list of all Costume items.
router.get('/author', author_controller.author_list);
module.exports = router;