import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1024px;
  width: 98%;
  min-height: 400px;

  margin: 0 auto;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    header {
      height: 50px;

      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
      }

      div {
        margin-left: 12px;

        display: flex;
        flex-direction: column;
        justify-content: left;
      }
    }
  }

  section {
    padding: 32px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 32px;
    min-width: 400px;

    strong {
      color: #bbb;
    }

    input {
      width: 100%;
      height: 40px;

      margin: 6px auto;
      padding: 6px;

      background-color: transparent;
      border: 1px solid #eee;
    }

    textarea {
      width: 100%;
      height: 120px;

      padding: 6px;
      margin: 6px auto;
      border: 1px solid #eee;

      resize: none;
    }

    button {
      height: 40px;
      background-color: #d97e4a;

      border: 0;
      border-radius: 4px;

      transition: 200ms;

      &:hover {
        background-color: ${darken(0.06, '#d97e4a')};
      }
    }
  }
`;
