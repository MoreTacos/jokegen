import React from 'react';

const FavoritesList = props => {
  const favoriteList = props.favorites.map(el => {
    return (
      <div
        key={el}
        class="elements"
        onClick={event => props.changeCurrent(event.target.innerText)}
      >
        <p>{el}</p>
      </div>
    );
  });
  favoriteList.unshift(
    <button
      className="button-w"
      key="button"
      onClick={() => {
        props.setState({ current: null });
      }}
    >
      Clear
    </button>
  );
  return (
    <div class="fav-list">
      <p class="message">Favorite jokes:</p>
      <div>
        <div class="fav-list-inner">{favoriteList}</div>
      </div>
    </div>
  );
};

export default FavoritesList;
