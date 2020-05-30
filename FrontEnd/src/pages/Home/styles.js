import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
    height: 60%;

    margin: 64px auto 0;
    background-color: white;
    border-radius: 4px;

    overflow: hidden;

    button {
      width: 50px;
      height: 50px;

      background-color: #d74f6b;
      border: 0;

      position: absolute;
      right: 0;
      top: 0;
    }

    header {
      padding: 8px 22px;
      height: 80px;

      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
      }

      > div {
        margin-left: 12px;

        p {
          color: #bbb;
        }
      }
    }
  }
`;

export const ModalContent = styled.div`
  padding: 32px 32px 0;

  h1 {
    font-size: 22px;
    text-transform: uppercase;
  }

  strong {
    color: #bbb;
    font-size: 14px;
    font-weight: 400;
  }

  p {
    font-size: 15px;
    margin-top: 18px;

    max-width: 80%;
  }
`;
