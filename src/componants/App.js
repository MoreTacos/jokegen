import React from 'react';
import jokes from '../apis/jokes';
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
        <div>Yes</div>
        <div>No</div>
      </div>
    );
  }
}

export default App;
