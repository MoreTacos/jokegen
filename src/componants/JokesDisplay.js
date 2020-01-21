import React from 'react';

const JokesDisplay = props => {
  if (props.jokes) {
    const list = props.jokes.map(el => {
      return (
        <div key={el.id}>
          <button onClick={() => props.newFavorite(el.id)}>Fav</button>
          <p>{el.joke}</p>
        </div>
      );
    });
    return (
      <div>
        <div>{list}</div>
      </div>
    );
  } else {
    return <div>Press Generate</div>;
  }
};

export default JokesDisplay;
