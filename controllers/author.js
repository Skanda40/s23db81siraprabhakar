var author = require('../models/author');
// List of all Costumes
exports.author_list = async function(req, res) {
    try{
    theCostumes = await author.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
// for a specific Costume.
exports.author_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: author detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.author_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: author create POST');
};
// Handle Costume delete form on DELETE.
exports.author_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: author delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.author_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: author update PUT' + req.params.id);
};
