import React, { Component } from 'react';
import axios from 'axios';
import ArtistsTable from './ArtistsTable';
import { SEARCH_URL } from '../constants';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []    
    };
  }
  render() {
    const artists = this.state.artists;    
    return (
      <div>
        <input ref={ input => this.input = input } type="text" />
        <button onClick={ this.doSearch.bind(this) }>Search</button>
        <ArtistsTable artists={artists} term={this.getInputValue.bind(this)()} />
      </div>
    );
  }
  doSearch() {
    let value = this.input.value;
    let url = SEARCH_URL + value;
    axios.get(url).then(res => {
      const artists = res.data.artists.items;      
      this.setState({ artists });            
      console.log(`Search OK ${value}`);
    });
  }
  getInputValue() {
    if(this.input) {
      return this.input.value;
    }    

    return '';
  }
}

export default SearchBox;