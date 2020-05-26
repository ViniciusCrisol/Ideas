export default function token(state = '', action) {
  switch (action.type) {
    case '@token/SET_REQUEST':
      const { token: userToken } = action;

      return (state = userToken);

    default:
      return state;
  }
}
