/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  userId: null,
  userName: null,
  userEmail: null,
  ideaCategory: null,
  ideaTitle: null,
  ideaShortDescription: null,
  ideaDescription: null,
  ideaCreateDate: null,
  loading: false,
};

export default function idea(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@idea/LOAD_IDEA_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@idea/LOAD_IDEA_SUCCESS': {
        draft.userId = action.payload.userId;
        draft.userName = action.payload.userName;
        draft.userEmail = action.payload.userEmail;
        draft.ideaCategory = action.payload.ideaCategory;
        draft.ideaTitle = action.payload.ideaTitle;
        draft.ideaShortDescription = action.payload.ideaShortDescription;
        draft.ideaDescription = action.payload.ideaDescription;
        draft.ideaCreateDate = action.payload.ideaCreateDate;
        draft.loading = true;
        break;
      }

      case '@idea/LOAD_IDEA_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
