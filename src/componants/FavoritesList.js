import React from 'react';

const FavoritesList = props => {
  const favoriteList = props.favorites.map(el => {
    return (
      <div
        key={el}
        onClick={event => props.changeCurrent(event.target.innerHTML)}
      >
        {el}
      </div>
    );
  });
  favoriteList.unshift(
    <button
      className="button button-clear"
      key="button"
      onClick={() => {
        props.setState({ current: null });
      }}
    >
      Clear
    </button>
  );
  return (
    <div>
      Favorite jokes:
      <div>{favoriteList}</div>
    </div>
  );
};

export default FavoritesList;
