import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { loadIdeaSuccess, loadIdeaFailure } from './actions';

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

export default all([takeLatest('@idea/LOAD_IDEA_REQUEST', loadIdeas)]);
