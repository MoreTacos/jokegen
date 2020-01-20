import React from 'react';
import jokes from '../apis/jokes';
import ParamsBar from './ParamsBar';
import Favorites from './Favorites';
import JokesDisplay from './JokesDisplay';

class App extends React.Component {
  state = { jokes: [] };
  render() {
    return (
      <div>
        <ParamsBar
          setState={p => {
            this.setState(p);
          }}
        />
        <JokesDisplay jokes={this.state.jokes} />
        <Favorites />
      </div>
    );
  }
}

export default App;
