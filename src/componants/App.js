import React from 'react';
import jokes from '../apis/jokes';
import ParamsBar from './ParamsBar';
import Favorites from './Favorites';
import JokesDisplay from './JokesDisplay';

jokes
  .get('jokes/random', {
    params: {
      foo: 'bar'
    }
  })
  .then(res => console.log(res));
class App extends React.Component {
  state = { joke: [] };
  render() {
    return (
      <div>
        <ParamsBar />
        <JokesDisplay jokes={this.state.jokes} />
        <Favorites />
      </div>
    );
  }
}

export default App;
