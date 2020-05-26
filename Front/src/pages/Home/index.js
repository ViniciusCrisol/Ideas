/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { Container, ProductContainer } from './styles';

import api from '../../services/api';

function Home({ history }) {
  const [ideas, setIdeas] = useState([]);

  function handleNavigate(id) {
    history.push(`/idea/${id}`);
  }

  async function getIdeas() {
    const response = await api.get('/');

    setIdeas(response.data);
  }

  useEffect(() => {
    getIdeas();
  }, []);

  return (
    <Container>
      {ideas.map((idea) => (
        <ProductContainer
          key={idea._id}
          onClick={() => handleNavigate(idea._id)}
        >
          <div />
          <section>
            {idea.category.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </section>
          <h1>{idea.title}</h1>
          <p>{idea.shortDescription}</p>
        </ProductContainer>
      ))}
    </Container>
  );
}

export default Home;
