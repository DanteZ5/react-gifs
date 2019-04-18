import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) { // be promoted into a class
    super(props);
  }

  selectThisGif = () => {
    if (this.props.gifSelection) {
      this.props.gifSelection(this.props.id);
    }
  }


  render() {
    const url = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" onClick={this.selectThisGif}/>
    );
  }
}

export default Gif;
