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
  return (
    <div>
      Favorite jokes:
      <div>{favoriteList}</div>
    </div>
  );
};

export default FavoritesList;
