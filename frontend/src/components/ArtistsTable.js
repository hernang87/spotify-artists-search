import React, { Component } from 'react';
import ArtistRow from './ArtistRow';
import '../css/ArtistsTable.css';

class ArtistsTable extends Component {
  render() {    
    const term = this.props.term;
    const rows = this.props.artists.map(artist => {      
      return <ArtistRow key={artist.id} artist={artist} />
    });

    if(rows.length === 0) {
      return <div></div>
    }    
    return (
      <div>
        <h1>Results for "{term}"</h1>
        <table className="artists-table">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );    
  }
}

ArtistsTable.contextTypes = {
  artists: React.PropTypes.object,
  term: React.PropTypes.string
}

export default ArtistsTable;