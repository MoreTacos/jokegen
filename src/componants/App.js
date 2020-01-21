import React from 'react';
import ParamsBar from './ParamsBar';
import FavoritesDisplay from './FavoritesDisplay';
import JokesDisplay from './JokesDisplay';

class App extends React.Component {
  state = { jokes: [], favorites: [] };
  newFavorite = value => {
    this.state.favorites.push(value);
    this.setState({ jokes: [] });
  };
  render() {
    return (
      <div>
        <ParamsBar
          setState={p => {
            this.setState(p);
          }}
        />
        <JokesDisplay
          jokes={this.state.jokes}
          newFavorite={value => this.newFavorite(value)}
        />
        <FavoritesDisplay favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
