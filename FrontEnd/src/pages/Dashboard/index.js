/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCreate, IoMdClose, IoMdTrash } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';

import { Container } from './styles';
import {
  ProductContainer,
  Button,
  Modal,
} from '../../components/_StyledComponents';

import { createIdea } from '../../store/modules/idea/actions';
import api from '../../services/api';

function Dashborad() {
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [ideas, setIdeas] = useState([]);

  function handleSubmit({ title, description, shortDescription, category }) {
    const { id } = user;

    dispatch(
      createIdea({ id, title, description, shortDescription, category })
    );
  }

  useEffect(() => {
    const response = api.get(`/user/show-ideas/${user.id}`);

    response.then((ideaData) => {
      setIdeas(ideaData.data);
    });
  }, [modal]);

  return (
    <>
      {modal && (
        <Modal>
          {!ideas.loading && (
            <div>
              <button type="button" onClick={() => setModal(false)}>
                <IoMdClose color="white" size={26} />
              </button>
              {ideas.map((idea) => (
                <ProductContainer key={idea._id}>
                  <h1>{idea.title}</h1>
                  <p>{idea.shortDescription}</p>
                  <section>
                    <button type="button">
                      <IoMdTrash color="white" size={20} />
                    </button>

                    <button type="button">
                      <AiOutlineEdit color="white" size={20} />
                    </button>
                  </section>
                </ProductContainer>
              ))}
            </div>
          )}
        </Modal>
      )}

      <Container>
        <div>
          <header>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable"
              alt="AdorableIcon"
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
          </header>

          <section>
            <Button type="button" onClick={() => setModal(true)}>
              My Ideas
            </Button>
          </section>
        </div>

        <Form onSubmit={handleSubmit}>
          <strong>Create a idea</strong>
          <Input type="text" placeholder="Title" name="title" />
          <Input
            multiline
            placeholder="A Short description of your idea"
            name="shortDescription"
          />
          <Input
            multiline
            placeholder="A description of your idea"
            name="description"
          />
          <Input
            type="text"
            name="category"
            placeholder="Categories | use comma to separate"
          />

          <button type="submit">
            <IoMdCreate size={22} color="white" />
          </button>
        </Form>
      </Container>
    </>
  );
}

export default Dashborad;
