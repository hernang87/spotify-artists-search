# Spotify Artists Search

This repository contains both the frontend and backend for querying the Spotify Web Api.
The frontend is built with React and the backend is using Node.
As database I'm using mysql with it's corresponding package for Node.

For the application to run correctly both applications should be running at the same time.

## Frontend
First, install dependencies. Inside the `frontend` folder run `npm install` and to run the application run `npm start`.

For backend configuration edit the file `src/constants.js`.

* `SEARCH_URL` is the URL to which `GET` the artists
* `SAVE_URL` is the URL to which `POST` to save artists
* `SAVED_URL` is the URL to which `GET` saved artists 

### TO DO
The implementation of showing the saved artists is missing.

## Backend
First, install dependencies. Inside the `backend` folder run `npm install` and to run the backed application run `node index.js`. The backend uses port `9999` by default and it can be changed on `index.js`. 

For database configuration, edit `config.js`. 
All fields are strings. 
* `DB_IP` can use an IP or a host address.
* `DB_PORT` defines the port for the connection, if removed it will use the mysql default `3306`

```javascript
module.exports = {
    DB_IP: 'some_host_or_url',
    DB_PORT: '5555', // if removed it will use 3306 as default 
    DB_NAME: 'db',
    DB_USER: 'user',
    DB_PASS: 'pass'
}
```


