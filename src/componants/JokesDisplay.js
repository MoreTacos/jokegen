import React from 'react';

const JokesDisplay = props => {
  if (props.jokes.data) {
    const list = props.jokes.data.value.map(el => {
      console.log(el.id);
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
