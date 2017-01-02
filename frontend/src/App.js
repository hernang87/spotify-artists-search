import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spotify Artist Search</h1>
        <SearchBox />
      </div>
    );
  }
}

export default App;