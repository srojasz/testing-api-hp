import React from 'react';
import fetch from '../api/fetch';

import List from './List';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      characters: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(inputValue) {
    this.setState({
      inputValue
    })
  }

  filteredCharacters() {
    if (!this.state.inputValue) {
      return this.state.characters
    } else {
      return (
        this.state.characters
          .filter(character => character.name.toLowerCase().includes(this.state.inputValue.toLowerCase())

          )
      )
    }
  }

  componentDidMount() {
    fetch().then(characters => this.setState({ characters }));
  }

  render() {
    console.log(this.state.characters);

    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        < List characters={this.filteredCharacters()} />
      </div>
    );
  }
}

export default App;
