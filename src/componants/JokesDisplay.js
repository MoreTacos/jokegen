import React from 'react';
// The joke display region
const JokesDisplay = props => {
  if (props.jokes) {
    const list = props.jokes.map(el => {
      return (
        <div class="joke" key={el.id}>
          <button class="fav" onClick={() => props.newFavorite(el.id)}>
            Fav
          </button>
          <p>{el.joke}</p>
        </div>
      );
    });
    return (
      <div class="main">
        <div>{list}</div>
      </div>
    );
  } else {
    return <div class="main">Press Generate</div>;
  }
};

export default JokesDisplay;
