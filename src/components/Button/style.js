import styled from "styled-components";

import { ERROR, INFO, SUCCESS, WARNING } from "../../constants/ToastProperties";
import { spacing, theme } from "../../theme";

export const ButtonContent = styled.button`
  cursor: pointer;
  width: ${spacing[12]}px;
  height: ${spacing[8]}px;
  border-radius: ${spacing[3]}px;
  background-color: ${theme.colors.white};
  border: none;
  &:hover {
    background-color: ${({ label }) => {
      switch (label) {
        case "Success":
          return `${theme.colors.shamrock}`;
        case "Error":
          return `${theme.colors.flamePea}`;
        case "Info":
          return `${theme.colors.darkOrchid}`;
        case "Warning":
          return `${theme.colors.minionYellow}`;
        default:
          return `${theme.colors.white}`;
      }
    }};
  }
`;
