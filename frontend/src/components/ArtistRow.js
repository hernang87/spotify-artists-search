import React, { Component } from 'react';
import axios from 'axios';
import { SAVE_URL } from '../constants';

class ArtistRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false
    };

    // Function binding
    this.renderImage.bind(this);   
  }
  render() {
    let name = this.props.artist.name;    

    return (
      <tr>
        <td><img className="artist-image" role="presentation" src={this.getImageUrl()} /></td>
        <td>{name}</td>
        <td>
          {this.renderStatus()}
        </td>
      </tr>
    );
  }
  renderImage() {       
    return     
  }
  renderStatus() {
    let jsx = <button onClick={ this.onSave.bind(this) }>Save</button>

    if(this.state.saved) {
      jsx = <span>Saved!</span>
    }
    
    return jsx;
  }
  onSave() {    
    let self = this;
    let obj = {
      name: this.props.artist.name,
      imageUrl: this.getImageUrl(),
      spotifyId: this.props.artist.id
    };

    axios.post(SAVE_URL, obj).then(response => {
      self.setState({ saved: true });
    });
  }
  getImageUrl() {
    let imageUrl = 'http://gooplay.org/wp-content/themes/gooplay/img/no-cover.jpg';
    if(this.props.artist.images.length > 0) {
      imageUrl = this.props.artist.images[0].url; 
    }
    return imageUrl;
  }
}

ArtistRow.contextTypes = {
  artist: React.PropTypes.object
}


export default ArtistRow;