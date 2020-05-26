import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductContainer = styled.button`
  position: relative;

  max-width: 300px;
  width: 90%;
  min-height: 180px;
  height: auto;

  border: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 1px 0px 10px -2px;
  margin: 8px 6px;
  padding: 32px;
  border-radius: 12px;
  overflow: hidden;

  text-decoration: none;
  text-align: left;

  section {
    text-transform: uppercase;

    display: flex;
    p {
      background-color: #f2bc79;
      margin: 0 6px;
      padding: 4px 10px;
      border-radius: 20px;

      &:first-child {
        margin: 0;
      }
    }
  }

  h1 {
    padding-top: 8px;
    margin-top: 8px;

    border-top: 1px solid #eee;

    font-size: 22px;
  }

  > p {
    margin-top: 8px;

    font-size: 15px;
    line-height: 1;
    color: rgb(102, 102, 102);

    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    position: absolute;
    left: 0px;
    top: 0px;

    width: 8px;
    height: 100%;

    z-index: 2;
    background-color: #f2bc79;
  }
`;
