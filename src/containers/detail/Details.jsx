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
      <div>Name:{character.name}</div>
      <div>Status:{character.status}</div>
      <div>Species:{character.species}</div>
      <div>Type:{character.type}</div>
      <div>Gender:{character.gender}</div>
    </div>
  );
}
}
