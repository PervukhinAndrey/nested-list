import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00000010;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background-color: #d3deeb;
  border-radius: 20px;
  padding: 60px;

  position: relative;
  & .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 26px;
    height: 26px;
  }
`;
