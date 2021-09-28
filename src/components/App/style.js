import styled from "styled-components";

const CONTENT_WIDTH = 100;
const MAIN_CONTAINER_WIDTH = 100;
const MAIN_CONTAINER_HEIGTH = 500;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${CONTENT_WIDTH}px;
`;
export const MainContainer = styled.div`
  width: ${MAIN_CONTAINER_WIDTH}%;
  height: ${MAIN_CONTAINER_HEIGTH}px;
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
