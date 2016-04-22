var express = require("express"),
    app = express(),
    methodOverride = require('method-override'),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    routes = require("./routes");

/// THIS IS A TERRIBLE COMMENT 


app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/puppies', routes.puppies);

//Home
app.get('/', function(req, res){
  res.render('home');
});

app.get('*', function(req,res){
  res.status(404).render('errors/404');
});

app.listen(3001, function(){
  console.log("Server is listening on port 3000");
});

module.exports = {
  app: app
};
