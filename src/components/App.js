import React from 'react';
import fetch from '../api/fetch';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }

  }

  componentDidMount() {
    fetch().then(characters => this.setState({ characters }));
  }

  render() {
    console.log(this.state.characters)
    return (
      <div>
        < List characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
