import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

import * as TokenAction from '../../store/modules/token/actions';

function SignIn({ history }) {
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      const response = api.post('/session', data);
      response.then((userData) => {
        console.log(userData.data);
        const { token } = userData.data;
        dispatch(TokenAction.setTokenRequest(token));
        history.push('/dashboard');
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="/register">Create a account</Link>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
