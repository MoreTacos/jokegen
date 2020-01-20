import React from 'react';

const JokesDisplay = props => {
  if (props.jokes.data) {
    const list = props.jokes.data.value.map(el => {
      return <div>{el.joke}</div>;
    });
    return <div>{list}</div>;
  } else {
    return <div>Press Generate</div>;
  }
};

export default JokesDisplay;
