import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

function Dashborad() {
  const token = useSelector((state) => state.token);

  return <h1>{token}</h1>;
}

export default Dashborad;
