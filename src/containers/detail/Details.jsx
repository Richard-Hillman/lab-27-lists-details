import React, { Component } from 'react';
import getCharacter from '../../services/mortys';
// This is my basic singular details article output 

export default class Details extends Component {

state= {
  character: {}
}

// ---------------------------------------------------

componentDidMount() {
  // eslint-disable-next-line semi
  const id = this.props.match.params.id 
  getCharacter(id)
    .then(character => this.setState({ character }));
}

// ---------------------------------------------------

render() {

  const { character } = this.state;

  return (
    <div className="ricky">
      <h1 className="charName">Name:{character.name}</h1>
      <div className="status">Status:{character.status}</div>
      <div className="species">Species:{character.species}</div>
      <div className="type">Type:{character.type}</div>
      <div className="gender">Gender:{character.gender}</div>
    </div>
  );
}
}
