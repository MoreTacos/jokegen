import React from 'react';
import jokesApi from '../apis/jokes';

class ParamsBar extends React.Component {
  state = { number: 1, categorie: [] };

  numberChange = event => {
    this.setState({ number: event.target.value });
  };

  onClick = async () => {
    const jokes = await jokesApi.get(`jokes/random/${this.state.number}`);
    this.props.setState({ jokes });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Generate</button>
        <form>
          <input
            onChange={this.numberChange}
            value={this.state.number}
            type="number"
          ></input>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}

export default ParamsBar;
