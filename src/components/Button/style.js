import styled from 'styled-components';

export const ButtonContent = styled.button`
  cursor: pointer;
  width: ${({ theme }) => theme.BUTTON_WIDTH}px;
  height: ${({ theme }) => theme.BUTTON_HEIGTH}px;
  border-radius: ${({ theme }) => theme.borderRadius?.[0]}px;
  background-color: ${({ theme }) => theme.colors?.white};
  border: none;
  &:hover {
    background-color: ${({ type, theme }) => theme.colors?.[type]};
  }
`;
