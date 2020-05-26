import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <FcIdea size={26} />
        </Link>

        <Form>
          <Input name="search" placeholder="Search for tags" />
          <button type="submit">
            <AiOutlineSearch size={22} color="white" />
          </button>
        </Form>
        <div>
          <Link to="/sign-in">Profile</Link>
        </div>
      </div>
    </Container>
  );
}

export default Header;
