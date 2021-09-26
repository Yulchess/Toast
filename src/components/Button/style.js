import styled from "styled-components";

import { SUCCESS } from "../../constants/ToastProperties";
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
        case SUCCESS:
          return `${theme.colors.shamrock}`;
        case "ERROR":
          return `${theme.colors.flamePea}`;
        case "INFO":
          return `${theme.colors.darkOrchid}`;
        case "WARNING":
          return `${theme.colors.minionYellow}`;
        default:
          return `${theme.colors.white}`;
      }
    }};
  }
`;
