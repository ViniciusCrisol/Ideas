import React from 'react';
import { IoMdCreate, IoMdHeartEmpty } from 'react-icons/io';

import { Container } from './styles';

function Dashborad() {
  return (
    <Container>
      <div>
        <button type="button">
          <IoMdHeartEmpty size={22} color="white" />
        </button>
        <button type="button">
          <IoMdCreate size={22} color="white" />
        </button>
      </div>
    </Container>
  );
}

export default Dashborad;
