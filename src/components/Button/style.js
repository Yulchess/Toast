import styled from "styled-components";

const BUTTON_WIDTH = 100;
const BUTTON_HEIGTH = 25;

export const ButtonContent = styled.button`
  cursor: pointer;
  width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_HEIGTH}px;
  border-radius: ${(props) => props.theme.borderRadius[0]}px;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  &:hover {
    background-color: ${({ type, theme }) => theme.colors[type]};
  }
`;
