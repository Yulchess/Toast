import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.CONTENT_WIDTH}px;
`;
export const MainContainer = styled.div`
  width: ${({ theme }) => theme.MAIN_CONTAINER_WIDTH}%;
  height: ${({ theme }) => theme.MAIN_CONTAINER_HEIGTH}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CheckBoxContent = styled.label`
  display: flex;
`;
export const CheckBoxText = styled.p`
  margin: ${(props) => props.theme.spacing[1]};
`;
export const SelectBox = styled.select`
  margin-top: ${(props) => props.theme.spacing[3]}px;
  height: ${(props) => props.theme.spacing[7]}px;
`;

export const ButtonContent = styled.div``;
export const Checkbox = styled.input``;
export const OptionValue = styled.option``;
