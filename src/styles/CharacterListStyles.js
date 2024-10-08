import styled from "styled-components";

export const ImgPerfil = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const CharacterCard = styled.div`
  background-color: #2c3034;
  width: auto;
  height: auto;
  border-radius: 20px;
  padding: 1%;
`;

export const Name = styled.div`
  color: white;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Status = styled.p`
  color: white;
`;

export const Button = styled.button`
  margin-left: 5%;
  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 15px;
  padding: 1px;

  &:hover {
    color: white;
  }
`;
