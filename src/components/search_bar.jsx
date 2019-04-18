import React, { Component } from 'react';


class SearchBar extends Component {
  handleInput = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search from-control"
      onChange={this.handleInput}/>
    );
  }
}

export default SearchBar;
