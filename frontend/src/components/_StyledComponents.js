import styled from 'styled-components';
import { darken } from 'polished';

export const ProductContainer = styled.button`
  max-width: 270px;
  width: 90%;
  min-height: 120px;
  max-height: 160px;

  border: 0;
  margin: 8px;
  padding: 14px;

  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 1px 0px 10px -2px;

  text-align: left;
  text-overflow: ellipsis;

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;

    font-size: 15px;
    color: #bbb;
  }

  section {
    margin-top: 12px;

    display: flex;
    align-items: center;

    button {
      background-color: #d74f6b;
      border: 0;
      border-radius: 4px;
      padding: 2px;

      transition: 200ms;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${darken(0.06, '#d74f6b')};
      }

      &:last-child {
        margin-left: 6px;
        background-color: #d97e4a;

        &:hover {
          background-color: ${darken(0.06, '#d97e4a')};
        }
      }
    }
  }
`;

export const Modal = styled.div`
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);

  > div {
    position: relative;

    width: 90%;
    max-width: 700px;
    min-height: 400px;

    margin: 64px auto 0;
    padding: 64px 0;
    background-color: white;
    border-radius: 4px;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    > button:first-child {
      width: 50px;
      height: 50px;

      background-color: #d74f6b;
      border: 0;

      position: absolute;
      right: 0;
      top: 0;
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
  }
`;

export const Button = styled.button`
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
`;

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
