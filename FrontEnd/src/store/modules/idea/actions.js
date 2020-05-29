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
