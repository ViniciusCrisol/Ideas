import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 80px;
  margin-bottom: 64px;

  box-shadow: 0 0 14px -3px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;

  > div {
    max-width: 1420px;
    width: 98%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      width: 40px;
      height: 40px;

      border-radius: 4px;
      background-color: #f2bc79;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div {
      a {
        width: 120px;
        height: 40px;

        margin-left: 8px;
        border: 0;
        border-radius: 4px;
        background-color: #d97e4a;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        text-transform: uppercase;

        transition: 200ms;

        &:hover {
          background-color: ${darken(0.06, '#D97E4A')};
        }
      }
    }
  }

  form {
    max-width: 600px;
    width: 50%;

    display: flex;
    align-items: center;

    input {
      height: 40px;
      width: 90%;

      border: 0;
      padding: 0 4px;
      border-bottom: 1px solid #eee;
    }

    > button {
      width: 40px;
      height: 40px;

      margin-left: 8px;
      border: 0;
      border-radius: 4px;
      background-color: #f2bc79;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 200ms;

      &:hover {
        background-color: ${darken(0.06, '#f2bc79')};
      }
    }
  }

  > button {
    width: 120px;
    height: 40px;

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
`;
