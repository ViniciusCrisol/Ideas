import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FcIdea } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

import { store } from '../../store';

import history from '../../services/history';

function Header() {
  const { signed } = store.getState().auth;

  function handleSumit({ search }) {
    history.push(`/search/${search}`);
  }

  return (
    <Container>
      <div>
        <Link to="/">
          <FcIdea size={26} />
        </Link>

        <Form onSubmit={handleSumit}>
          <Input name="search" placeholder="Search for tags" />
          <button type="submit">
            <AiOutlineSearch size={22} color="white" />
          </button>
        </Form>
        <div>
          <Link to={signed ? '/dashboard' : '/sign-in'}>profile</Link>
        </div>
      </div>
    </Container>
  );
}

export default Header;
