import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    margin-top: 10px;
    width: 100%;
    border: 0;
  }

  & div {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonContent = styled.div`
  width: 90px;
  height: 30px;

  background-color: white;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 20px;
`;
