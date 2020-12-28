import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container } from '../../components/_StyledComponents';

import { signInRequest } from '../../store/modules/auth/actions';

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Password" />
          <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
          <Link to="/sign-up">Create a account</Link>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
