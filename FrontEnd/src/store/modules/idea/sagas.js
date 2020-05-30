import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { loadIdeaSuccess, loadIdeaFailure, createIdeaFailure } from './actions';

export function* loadIdea({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/idea/show/${id}`);

    const {
      userId,
      userName,
      userEmail,
      ideaCategory,
      ideaTitle,
      ideaShortDescription,
      ideaDescription,
      ideaCreateDate,
    } = response.data;

    yield put(
      loadIdeaSuccess({
        userId,
        userName,
        userEmail,
        ideaCategory,
        ideaTitle,
        ideaShortDescription,
        ideaDescription,
        ideaCreateDate,
      })
    );
  } catch (error) {
    toast.error('Load failure');

    yield put(loadIdeaFailure());
  }
}

export function* createIdea({ payload }) {
  try {
    const { id, title, description, shortDescription, category } = payload;

    const response = yield call(api.post, `/idea/create/${id}`, {
      title,
      description,
      shortDescription,
      category,
    });

    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      toast.success('Idea created =)');
    }
  } catch (error) {
    toast.error('Create idea failure');

    yield put(createIdeaFailure());
  }
}

export function* editIdea({ payload }) {
  try {
    const { id, title, description, shortDescription } = payload;

    yield call(api.put, `/idea/update/${id}`, {
      title,
      description,
      shortDescription,
    });
  } catch (error) {
    toast.error('Edit idea failure');
  }
}

export function* deleteIdea({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/idea/delete/${id}`);

    if (response.data.error) {
      toast.error(response.data.error);
    }
  } catch (error) {
    toast.error('Delete idea failure');
  }
}

export default all([
  takeLatest('@idea/LOAD_IDEA_REQUEST', loadIdea),
  takeLatest('@idea/CREATE_IDEA_REQUEST', createIdea),
  takeLatest('@idea/DELETE_IDEA_REQUEST', deleteIdea),
  takeLatest('@idea/EDIT_IDEA_REQUEST', editIdea),
]);
