import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonContent = styled.button`
  cursor: pointer;
  width: 100px;
  height: 25px;
  border-radius: 10px;
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
