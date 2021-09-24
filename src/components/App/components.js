import styled from "styled-components";
import { spacing } from "../../theme";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 500px;
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
  margin-top: 10px;
  height: 25px;
`;
