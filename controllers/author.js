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
exports.author_create_post = async function(req, res) {
    console.log(req.body)
    let document = new author();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.expertise = req.body.expertise;
    document.age = req.body.age;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle Costume delete form on DELETE.
exports.author_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: author delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.author_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: author update PUT' + req.params.id);
};


exports.costume_view_all_Page = async function(req, res) {
    try{
    theCostumes = await author.find();
    res.render('author', { title: 'author Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   
