import React from 'react';
import jokes from '../apis/jokes';
import ParamsBar from './ParamsBar';
import Favorites from './Favorites';

jokes
  .get('jokes/random', {
    params: {
      foo: 'bar'
    }
  })
  .then(res => console.log(res));
class App extends React.Component {
  render() {
    return (
      <div>
        <ParamsBar />
        <div>DISPLAY JOKE</div>
        <Favorites />
      </div>
    );
  }
}

export default App;
