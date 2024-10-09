import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  & span {
    display: block;
    text-align: center;
  }

  & div {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const ButtonContent = styled.div`
  width: 50px;
  height: 30px;

  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;
