import styled from "styled-components";

export const ModalStyles = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  transition: 0.5s;
`;

export const WindowStyle = styled.div`
  display: flex;
  margin: 10px;
  width: 200px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.backgroundColor.main};
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor.main};
`;
export const ToastText = styled.p`
  color: ${(props) => props.theme.textColor.main};
`;

export const ToastCloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  z-index: 1;
  cursor: pointer;
  :before {
    content: "+";
    color: ${(props) => props.theme.textColor.main};
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }
`;
