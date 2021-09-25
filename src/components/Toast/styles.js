import styled from "styled-components";
import { theme } from "../../theme";

export const ModalStyles = styled.div`
  position: absolute;
  margin: 10px;

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
  padding: 15px;
  height: 60px;
  width: 260px;
  border-radius: 15px;
  margin: 4px;
`;

export const ToastInfo = styled.p`
  font-size: 18px;
  text-align: left;
  height: 20px;
  margin: 0px;
  margin-left: 15px;
`;

export const ToastContentBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ToastCloseButton = styled.div`
  cursor: pointer;
  position: relative;
  right: 20px;
  top: -20px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 4px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const ToastIcon = styled.img`
  width: 35px;
  height: 35px;
`;
