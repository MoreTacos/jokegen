import React from 'react';

class ParamsBar extends React.Component {
  state = { number: 0, categorie: [] };

  render() {
    return (
      <div>
        <button>Generate</button>
        <input type="number"></input>
        <input type="text"></input>
      </div>
    );
  }
}

export default ParamsBar;
