import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'gQmyUokrbbSpy'
    };
    this.search('Game of Thrones');
    // this.gifSelection("gQmyUokrbbSpy");
  }

  search = (query) => {
    giphy({ apiKey: '5lIJj7vn98SczE2UqnuaW1VCXLbB0u9h', https: true }).search({
      q: query,
      rating: 'g',
      limit: 12
    }, (err, res) => {
      this.setState({gifs: res.data});
    });
  }

  gifSelection = (gifId) => {
    // console.log(gifId);
    this.setState({selectedGifId: gifId});
  }

  render() {
    // const gifs = [{id: "NXOF5rlaSXdAc"}, {id: "gQmyUokrbbSpy"}]

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifSelection={this.gifSelection}/>
        </div>
      </div>
    );
  }
}

export default App;
