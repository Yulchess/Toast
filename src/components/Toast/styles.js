import styled from "styled-components";

import { spacing } from "../../theme";

export const ModalStyles = styled.div`
  position: absolute;
  margin: ${spacing[3]}px;

  top: ${({ position }) => {
    switch (position) {
      case "TopRight":
        return 0;
      case "TopLeft":
        return 0;
      default:
        return "initial";
    }
  }};

  bottom: ${({ position }) => {
    switch (position) {
      case "BottomRight":
        return 0;
      case "BottomLeft":
        return 0;
      default:
        return "initial";
    }
  }};

  left: ${({ position }) => {
    switch (position) {
      case "TopLeft":
        return 0;
      case "BottomRigth":
        return 0;
      default:
        return "initial";
    }
  }};

  right: ${({ position }) => {
    switch (position) {
      case "BottomLeft":
        return 0;
      case "TopRight":
        return 0;
      default:
        return "initial";
    }
  }};
`;
export const ToastContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]}px;
  height: ${spacing[11]}px;
  width: ${spacing[13]}px;
  border-radius: ${spacing[4]}px;
  margin: ${spacing[2]}px;
`;

export const ToastInfo = styled.p`
  font-size: ${spacing[5]}px;
  text-align: left;
  height: ${spacing[6]}px;
  margin: 0px;
  margin-left: ${spacing[4]}px;
`;

export const ToastContentBlock = styled.div`
  display: flex;
  width: ${spacing[12]}%;
  height: ${spacing[12]}%;
  align-items: center;
`;

export const ToastCloseButton = styled.div`
  cursor: pointer;
  position: relative;
  right: ${spacing[6]}px;
  top: ${spacing[1]}px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: ${spacing[7]}px;
    height: ${spacing[2]}px;
    background-color: ${({ isBlack }) => (isBlack ? "black" : "white")};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const ToastIcon = styled.img`
  width: ${spacing[9]}px;
  height: ${spacing[9]};
`;
