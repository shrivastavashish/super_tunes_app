import React, { Component } from "react";
import songs from './services/songs';
import SongCard from './components/SongCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [...songs],
      sortBy: null,
    };
  }

  handleSortByTitle = () => {
    this.setState({
      songs: this.state.songs.sort((a, b) => a.title.localeCompare(b.title)),
      sortBy:"title"
    });
  };

  handleSortByRating = () => {
    this.setState({
      songs: this.state.songs.sort((a, b) => b.rating - a.rating),
      sortBy: "rating",
    });
  };

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <div>
          <button className="st-btn" onClick={this.handleSortByTitle}>Sort by Title</button>
          <button className="st-btn" onClick={this.handleSortByRating}>Sort by rating</button>
        </div>
        <ul>
          {this.state.songs.map((song, index)  => (
            <li key={index}>
              <SongCard song={song} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
