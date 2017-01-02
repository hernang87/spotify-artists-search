var app = require('express')();
var SpotifyWebApi = require('spotify-web-api-node');
var bodyParser = require('body-parser');
var DbHandler = require('./modules/DbHandler');

var db = new DbHandler();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var spotifyApi = new SpotifyWebApi();

var port = 9999;

app.use((req, res, next) => {  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');   
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');   
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
  res.setHeader('Access-Control-Allow-Credentials', true);   
  next();
});

app.get('/artists/:name', (req, res) => {
  // Parameters
  let name = req.params.name;

  spotifyApi.searchArtists(name).then(
    data => {
      console.log('Search success: ' + name);
      res.send(data.body);
    },
    err => {
      console.error(err);
      res.send(err);
  });
});

app.get('/saved-artists', (req, res) => {
  db.getSavedArtists(artists => {
    res.status(200).send({ artists });
  });  
});

app.post('/artists', (req, res) => {
  db.addArtist(req.body, () => {
    res.status(200).send('Saved');
  });  
});

app.listen(port, () => console.log('Listening on port ' + port));