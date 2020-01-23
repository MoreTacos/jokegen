import React from 'react';
import jokesApi from '../apis/jokes';

// Main params bar
//

class ParamsBar extends React.Component {
  state = { number: 1 };

  numberChange = event => {
    this.setState({ number: event.target.value });
  };
  // On click
  onClick = async () => {
    const jokes = (await jokesApi.get(`jokes/random/${this.state.number}`)).data
      .value;
    this.props.setState({ jokes });
  };

  render() {
    return (
      <div className="nav">
        <div>
          <button className="button" onClick={this.onClick}>
            Generate
          </button>
          <button
            className="button button-clear"
            onClick={() => this.props.setState({ jokes: [] })}
          >
            Clear
          </button>
        </div>
        <form>
          <label for="joke-number">Number of Jokes:</label>
          <input
            id="joke-number"
            className="input"
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
