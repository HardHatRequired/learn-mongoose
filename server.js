var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


// app setup
var app = express();
var heroCtrl = require('./api/controllers/heroCtrl');
var port = 8080;


// database setup
var mongoJS = require('mongojs');
var db = mongoJS('heroes', ['lists']);

// setup the app middlware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

// setup the api
app.get('/api/heroes', heroCtrl.read);
app.post('/api/heroes', heroCtrl.create);
// app.put('/api/users', api.update);
// app.delete('/api/users', api.destroy);
// set up global error handling

app.listen(port, function() {
	console.log('I\'m watching you... creepy!!! ', port);
});
