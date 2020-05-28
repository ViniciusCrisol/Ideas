import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container } from '../../components/FormStyle';

import { signUpRequest } from '../../store/modules/auth/actions';

function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="name" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Password" />
          <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
          <Link to="/sign-in">Already have an account ?</Link>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
