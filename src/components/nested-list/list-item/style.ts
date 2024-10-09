import styled from "styled-components";

export const Container = styled.div<{ $hasChild?: boolean }>`
  & > .item-content {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-left: ${(p) => (p.$hasChild ? "0" : "30px")};
  }
  & span {
    width: auto;
    word-wrap: normal;
    word-break: break-all;
  }
  & .left,
  & .right {
    display: flex;
    gap: 10px;
    min-width: 80px;
    justify-content: flex-start;
  }
  padding-left: ${(p) => (p.$hasChild ? "20px" : "20px")};
  margin-bottom: 5px;
`;
export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
