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

import {
  createIdea,
  deleteIdea,
  editIdea,
  loadIdea,
} from '../../store/modules/idea/actions';
import api from '../../services/api';

function Dashborad() {
  const user = useSelector((state) => state.user.profile);
  const lookIdea = useSelector((state) => state.idea);
  const dispatch = useDispatch();

  const [idIdeia, setIdIdea] = useState('');
  const [modal, setModal] = useState(false);
  const [modalEditIdea, setModalEditIdea] = useState(false);

  const [ideas, setIdeas] = useState([]);

  function handleCreate({ title, description, shortDescription, category }) {
    const { id } = user;

    dispatch(
      createIdea({ id, title, description, shortDescription, category })
    );
  }

  function handleEdit({ title, description, shortDescription }) {
    dispatch(
      editIdea({
        id: idIdeia,
        title,
        description,
        shortDescription,
      })
    );

    setModalEditIdea(false);
  }

  function editModal(id) {
    setIdIdea(id);

    dispatch(loadIdea(id));

    setModalEditIdea(true);
  }

  function closeModal() {
    setModalEditIdea(false);
    setModal(false);
  }

  useEffect(() => {
    const response = api.get(`/user/show-ideas/${user.id}`);

    response.then((ideaData) => {
      setIdeas(ideaData.data);
    });
  }, [ideas]);

  return (
    <>
      {modal && (
        <Modal>
          {!ideas.loading && (
            <div>
              <button type="button" onClick={() => closeModal()}>
                <IoMdClose color="white" size={26} />
              </button>
              {modalEditIdea ? (
                <Form
                  onSubmit={handleEdit}
                  initialData={{
                    shortDescription: lookIdea.ideaShortDescription,
                    title: lookIdea.ideaTitle,
                    description: lookIdea.ideaDescription,
                  }}
                >
                  <strong>Edit</strong>
                  <Input type="text" name="title" />
                  <Input multiline name="shortDescription" />
                  <Input multiline name="description" />
                  <button type="submit">
                    <IoMdCreate size={22} color="white" />
                  </button>
                </Form>
              ) : (
                <>
                  {ideas.map((idea) => (
                    <ProductContainer key={idea._id}>
                      <h1>{idea.title}</h1>
                      <p>{idea.shortDescription}</p>
                      <section>
                        <button
                          type="button"
                          onClick={() => dispatch(deleteIdea(idea._id))}
                        >
                          <IoMdTrash color="white" size={20} />
                        </button>

                        <button
                          type="button"
                          onClick={() => editModal(idea._id)}
                        >
                          <AiOutlineEdit color="white" size={20} />
                        </button>
                      </section>
                    </ProductContainer>
                  ))}
                </>
              )}
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

        <Form onSubmit={handleCreate}>
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
