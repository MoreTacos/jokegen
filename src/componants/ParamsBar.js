import React from 'react';
import jokes from '../apis/jokes';

class ParamsBar extends React.Component {
  state = { number: 1, categorie: [] };
  numberChange() {
    this.setState({ number: 5 });
  }
  async onClick() {
    const joke = await jokes.get(`jokes/random/3`);
    console.log(joke);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Generate</button>
        <input
          onChange={this.numberChange}
          value={this.state.number}
          type="number"
        ></input>
        <input type="text"></input>
      </div>
    );
  }
}

export default ParamsBar;
