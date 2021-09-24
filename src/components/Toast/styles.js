import styled from "styled-components";

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
export const ToastComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 260px;
  border-radius: 15px;
  margin: 4px;
`;

export const ToastInfo = styled.p`
  font-size: 18px;
  margin: 0;
  text-align: left;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 5px;
`;

export const ToastCloseButton = styled.div`
  cursor: pointer;
  position: relative;
  right: 18px;

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
