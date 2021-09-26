import styled from "styled-components";

import { spacing } from "../../theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${spacing[12]}px;
`;
export const MainContainer = styled.div`
  width: ${spacing[12]}%;
  height: ${spacing[14]}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CheckBoxContent = styled.label`
  display: flex;
`;
export const CheckBoxText = styled.p`
  margin: 0;
`;
export const SelectBox = styled.select`
  margin-top: ${spacing[3]}px;
  height: ${spacing[8]}px;
`;

export const ButtonContent = styled.div``;
export const Checkbox = styled.input``;
export const RigthValue = styled.option``;
export const LeftValue = styled.option``;
export const BottomLeftValue = styled.option``;
export const BottomRigthValue = styled.option``;
