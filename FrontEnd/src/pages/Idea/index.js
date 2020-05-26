import React from 'react';

// import { Container } from './styles';

function Idea({ match }) {
  return <h1>{match.params.id}</h1>;
}

export default Idea;
