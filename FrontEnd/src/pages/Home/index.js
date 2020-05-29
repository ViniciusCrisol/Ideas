/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  ProductContainer,
  Modal,
  ModalContent,
  LoadingContainer,
} from './styles';

import { loadIdea } from '../../store/modules/idea/actions';

import api from '../../services/api';

function Home() {
  const dispatch = useDispatch();
  const [ideas, setIdeas] = useState([]);
  const [modal, setModal] = useState(false);

  const lookIdea = useSelector((state) => state.idea);

  function handleSubmit(id) {
    dispatch(loadIdea(id));

    setModal(true);
  }

  async function getIdeas() {
    const response = await api.get('/idea/index');

    setIdeas(response.data);
  }

  useEffect(() => {
    getIdeas();
  }, []);

  return (
    <>
      {modal && (
        <Modal>
          <div>
            {lookIdea.loading ? (
              <>
                <header>
                  <img
                    src="https://api.adorable.io/avatars/50/adorable.png"
                    alt="AdorableIcon"
                  />
                  <div>
                    <p>Created by</p>
                    <strong>{lookIdea.userName}</strong>
                  </div>
                  <button type="button" onClick={() => setModal(false)}>
                    <IoMdClose color="white" size={26} />
                  </button>
                </header>

                <ModalContent>
                  <h1>{lookIdea.ideaTitle}</h1>
                  <strong>{lookIdea.ideaShortDescription}</strong>
                  <p>{lookIdea.ideaDescription}</p>
                </ModalContent>
              </>
            ) : (
              <LoadingContainer>
                <button type="button" onClick={() => setModal(false)}>
                  <IoMdClose color="white" size={26} />
                </button>
                <h1>The content is loading...</h1>
                <strong>sorry about that =(</strong>
              </LoadingContainer>
            )}
          </div>
        </Modal>
      )}

      <Container>
        {ideas.map((idea) => (
          <ProductContainer
            key={idea._id}
            onClick={() => handleSubmit(idea._id)}
          >
            <h1>{idea.title}</h1>
            <p>{idea.shortDescription}</p>
          </ProductContainer>
        ))}
      </Container>
    </>
  );
}

export default Home;
