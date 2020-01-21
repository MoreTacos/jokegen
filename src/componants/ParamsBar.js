import React from 'react';
import jokesApi from '../apis/jokes';

class ParamsBar extends React.Component {
  state = { number: 1 };

  numberChange = event => {
    this.setState({ number: event.target.value });
  };

  onClick = async () => {
    const jokes = (await jokesApi.get(`jokes/random/${this.state.number}`)).data
      .value;
    this.props.setState({ jokes });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Generate</button>
        <button onClick={() => this.props.setState({ jokes: [] })}>
          Clear
        </button>
        <form>
          <input
            onChange={this.numberChange}
            value={this.state.number}
            type="number"
          ></input>
        </form>
      </div>
    );
  }
}

export default ParamsBar;
