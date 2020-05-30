export function loadIdea(id) {
  return {
    type: '@idea/LOAD_IDEA_REQUEST',
    payload: { id },
  };
}

export function loadIdeaFailure() {
  return {
    type: '@idea/LOAD_IDEA_FAILURE',
  };
}

export function loadIdeaSuccess({
  userId,
  userName,
  userEmail,
  ideaCategory,
  ideaTitle,
  ideaShortDescription,
  ideaDescription,
  ideaCreateDate,
}) {
  return {
    type: '@idea/LOAD_IDEA_SUCCESS',
    payload: {
      userId,
      userName,
      userEmail,
      ideaCategory,
      ideaTitle,
      ideaShortDescription,
      ideaDescription,
      ideaCreateDate,
    },
  };
}

export function createIdea({
  id,
  title,
  description,
  shortDescription,
  category,
}) {
  return {
    type: '@idea/CREATE_IDEA_REQUEST',
    payload: { id, title, description, shortDescription, category },
  };
}

export function createIdeaFailure() {
  return {
    type: '@idea/CREATE_IDEA_FAILURE',
  };
}

export function createIdeaSuccess() {
  return {
    type: '@idea/CREATE_IDEA_SUCCESS',
  };
}
