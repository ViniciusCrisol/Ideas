import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1420px;
  width: 98%;
  min-height: 400px;

  margin: 0 auto;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.15);

  div {
    button {
      width: 40px;
      height: 40px;
      background-color: #d74f6b;

      border: 0;
      border-radius: 4px;

      transition: 200ms;

      &:hover {
        background-color: ${darken(0.06, '#d74f6b')};
      }

      &:last-child {
        margin-left: 8px;
        background-color: #d97e4a;

        &:hover {
          background-color: ${darken(0.06, '#d97e4a')};
        }
      }
    }
  }
`;
