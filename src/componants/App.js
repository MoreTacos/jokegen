import React from 'react';
import ParamsBar from './ParamsBar';
import FavoritesDisplay from './FavoritesDisplay';
import JokesDisplay from './JokesDisplay';

class App extends React.Component {
  state = { jokes: [], favorites: [] };
  render() {
    return (
      <div>
        <ParamsBar
          setState={p => {
            this.setState(p);
          }}
        />
        <JokesDisplay jokes={this.state.jokes} />
        <FavoritesDisplay />
      </div>
    );
  }
}

export default App;
