var config = require('../config');
var mysql = require('mysql');



class DbHandler {
  constructor() {
    this.connection = mysql.createConnection({
      host     : config.DB_IP,
      port     : config.DB_PORT,
      user     : config.DB_USER,
      password : config.DB_PASS,
      database : config.DB_NAME    
    });
    this.connection.connect(err => console.error(err));
  }
  addArtist(artist, cb) {
    let self = this;    
    this.connection.query(`INSERT INTO artists(name, imageUrl, spotifyId) values("${artist.name}","${artist.imageUrl}","${artist.spotifyId}")`, (err, rows, fields) => {
      if (err) throw err;
      console.log('INSERT SUCCESS ' + rows.insertId);     
      cb();
    });    
  }
  getSavedArtists(cb) {
    return this.connection.query('SELECT * from artists', (err, rows) => {
      cb(rows);
    });
  }
}

module.exports = DbHandler;