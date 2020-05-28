import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px;

  max-width: 420px;
  width: 100%;

  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 40px;

    margin: 6px 0;
    border: 0;
    padding: 4px;
    border-bottom: 1px solid #eee;
  }

  button {
    width: 100%;
    height: 40px;

    margin: 6px 0;

    border: 0;
    border-radius: 4px;
    background-color: #d97e4a;

    font-size: 13px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;

    transition: 200ms;

    &:hover {
      background-color: ${darken(0.06, '#d97e4a')};
    }
  }

  a {
    color: #666;
  }
`;
