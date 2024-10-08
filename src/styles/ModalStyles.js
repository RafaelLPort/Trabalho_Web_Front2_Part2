import styled from "styled-components";

export const ModalS = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #2c3034;
  width: 80%;
  max-width: 600px;
  max-height: 700px;
  border: 5px solid black;
  color: black;
  z-index: 999;
  height: auto;
  padding: 30px;
`;

export const ModalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 30px;
  padding: 1px;

  &:hover {
    color: #b22222;
  }
`;

export const DescCompleta = styled.div`
  align-items: center;
  margin: 15px;
  color: white;
`;

export const DescButton = styled.button`
  margin-left: 17px;
  border: none;
  background-color: transparent;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  padding: 1px;

  &:hover {
    color: #7fff00;
  }
`;

export const TitleModal = styled.h1`
  color: #7fff00;
  text-align: center;
  flex-grow: 1;
  margin-right: 30px;
`;

export const DivModal = styled.div``;
