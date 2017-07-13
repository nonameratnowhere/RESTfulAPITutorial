var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose');
  Task = require('./api/models/toDoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
  userMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found.'});
});
var routes = require('./api/routes/toDoListRoutes')
routes(app);

app.listen(port);

console.log('toDo list RESTful API server started on: ' + port)
