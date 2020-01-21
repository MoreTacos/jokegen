import React from 'react';
import jokesApi from '../apis/jokes';
import FavoritesList from './FavoritesList';
class Favorites extends React.Component {
  state = { current: null };
  changeCurrent = async id => {
    console.log(id);
    const joke = await jokesApi.get(`jokes/${id}`);
    console.log(joke);
    this.setState({ current: joke.data.value.joke });
  };
  render() {
    return (
      <div>
        <FavoritesList
          favorites={this.props.favorites}
          changeCurrent={val => this.changeCurrent(val)}
        />
        <div>{this.state.current}</div>
      </div>
    );
  }
}

export default Favorites;
