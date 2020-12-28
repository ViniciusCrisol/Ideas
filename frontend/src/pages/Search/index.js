/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

import { Container, Modal, ModalContent } from '../../components/_StyledHome';
import { ProductContainer } from '../../components/_StyledComponents';
import { Wrapper, FailContainer } from './styles';

import { loadIdea } from '../../store/modules/idea/actions';

import api from '../../services/api';

function Search({ match }) {
  const { search } = match.params;

  const lookIdea = useSelector((state) => state.idea);
  const dispatch = useDispatch();

  const [ideas, setIdeas] = useState([]);
  const [modal, setModal] = useState(false);

  async function getItens() {
    const response = await api.get(`/idea/search/${search}`);

    setIdeas(response.data);
  }

  function handleSubmit(id) {
    dispatch(loadIdea(id));

    setModal(true);
  }

  useEffect(() => {
    getItens();
  }, [ideas]);

  return (
    <>
      {modal && (
        <Modal>
          {!lookIdea.loading && (
            <div>
              <>
                <header>
                  <img
                    src="https://api.adorable.io/avatars/57/@adorable"
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
            </div>
          )}
        </Modal>
      )}

      <Wrapper>
        <>
          {ideas.length > 0 ? (
            <>
              <p>
                Search by <strong>{search}</strong>
              </p>
              <Container>
                <section>
                  {ideas.map((idea) => (
                    <ProductContainer
                      key={idea._id}
                      onClick={() => handleSubmit(idea._id)}
                    >
                      <h1>{idea.title}</h1>
                      <p>{idea.shortDescription}</p>
                    </ProductContainer>
                  ))}
                </section>
              </Container>
            </>
          ) : (
            <FailContainer>
              <h1>Nothig found =(</h1>
            </FailContainer>
          )}
        </>
      </Wrapper>
    </>
  );
}

export default Search;
