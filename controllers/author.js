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
exports.author_detail =  async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await author.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   
// Handle Costume create on POST.
exports.author_create_post = async function (req, res) {
    console.log(req.body)
    let document = new author();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.expertise = req.body.expertisea;
    document.age = req.body.age;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    };
};

exports.author_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('authorcreate', { title: 'Author Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
// Handle Costume delete form on DELETE.
exports.author_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await author.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a delete one view with id from query
   exports.author_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id);
    try {
        result = await author.findById(req.query.id);
        res.render('authordelete', { title: 'Author Delete', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
   };

   
// Handle Costume update form on PUT.
exports.author_update_put = async function(req, res) {
    console.log("IN")
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await author.findById( req.params.id)
    // Do updates of properties
    if(req.body.name) 
    toUpdate.name = req.body.name;
    if(req.body.expertise) toUpdate.expertise = req.body.expertise;
    if(req.body.age) toUpdate.age = req.body.age;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
   };

// Handle building the view for updating a costume.
// query provides the id
exports.author_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await author.findById(req.query.id)
    res.render('authorupdate', { title: 'Author Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


exports.author_view_all_Page = async function(req, res) {
    try{
    theCostumes = await author.find();
    res.render('author', { title: 'author Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };



   
   exports.author_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await author.findById( req.query.id)
    res.render('authordetail', 
   { title: 'Author Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
