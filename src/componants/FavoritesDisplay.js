import React from 'react';
import jokesApi from '../apis/jokes';
import FavoritesList from './FavoritesList';
class Favorites extends React.Component {
  state = { current: 'Chuck is funny' };
  changeCurrent = async id => {
    this.setState({ current: await jokesApi.get(`jokes/${5}`) });
  };
  render() {
    return (
      <div>
        <FavoritesList />
        <div>{this.state.current}</div>
        <button onClick={this.changeCurrent}>Click me</button>
      </div>
    );
  }
}

export default Favorites;
