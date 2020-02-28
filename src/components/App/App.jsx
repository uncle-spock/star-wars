import React, { Component } from 'react';
import * as api from '../../services/api/apiService';

class App extends Component {
  state = {
    people: null
  }

  async getPeople() {
    try {
      const people = await await api.getPeople();
      this.setState({
        people: people.results
      });
    } catch (err) {
      throw new Error(`Oops: ${err}`);
    }
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people } = this.state;

    return (
      <>
        {people ? people.map(person => (
          <div key={person.name}>
            <span><strong>Name:</strong> {person.name} </span>
            <span><strong>Height:</strong> {person.height} </span>
            <span><strong>Mass:</strong> {person.mass} </span>
            <span><strong>Hair color:</strong> {person.hair_color} </span>
            <span><strong>Skin color:</strong> {person.skin_color} </span>
          </div>
        )) : (
            'Please wait'
          )}
      </>
    );
  }
}

export default App;
