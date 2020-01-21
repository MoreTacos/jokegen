import React from 'react';
import jokesApi from '../apis/jokes';
import FavoritesList from './FavoritesList';
class Favorites extends React.Component {
  state = { current: null };
  changeCurrent = async id => {
    const joke = await jokesApi.get(`jokes/${id}`);
    this.setState({ current: joke.data.value.joke });
  };
  render() {
    return (
      <div>
        <FavoritesList
          setState={p => {
            this.setState(p);
          }}
          favorites={this.props.favorites}
          changeCurrent={val => this.changeCurrent(val)}
        />
        <div>{this.state.current}</div>
      </div>
    );
  }
}

export default Favorites;
