import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  loadIdeaSuccess,
  loadIdeaFailure,
  createIdeaSuccess,
  createIdeaFailure,
} from './actions';

export function* loadIdeas({ payload }) {
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
  } catch (err) {
    toast.error('Load failure');

    yield put(loadIdeaFailure());
  }
}

export function* createIdeas({ payload }) {
  try {
    const { id, title, description, shortDescription, category } = payload;

    yield call(api.post, `/idea/create/${id}`, {
      title,
      description,
      shortDescription,
      category,
    });

    toast.success('Idea created =)');

    yield put(createIdeaSuccess());
  } catch (err) {
    toast.error('Create idea failure');

    yield put(createIdeaFailure());
  }
}

export default all([
  takeLatest('@idea/LOAD_IDEA_REQUEST', loadIdeas),
  takeLatest('@idea/CREATE_IDEA_REQUEST', createIdeas),
]);
