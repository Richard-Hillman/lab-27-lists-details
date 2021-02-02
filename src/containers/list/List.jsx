import React, { Component } from 'react';
import getCharacters from '../../services/rickAndMortyApi';
import { Link } from 'react-router-dom';

// This is my basic singular details article output 
export default class List extends Component {

state= {
  characters: []
};

componentDidMount() {
  getCharacters()
    .then(characters => this.setState({ characters }));
}

// ---------------------------------------------------

render() {
  return (
    <div className="ricky">

      {
        this.state.characters.map((character) => (
          <>
            <Link key={character.id} to = {`/details/${character.id}`} >
              <div>{character.name}</div>
              <div>{character.status}</div>
              <div>{character.species}</div>
              <div>{character.type}</div>
              <div>{character.gender}</div>
            </Link>
          </>
        )
        )       
      };

    </div>
  );
}
}
