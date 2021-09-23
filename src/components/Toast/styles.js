import styled from "styled-components";

export const ModalStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
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

export const WindowStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 200px;

  padding: 20px;
`;
export const ToastText = styled.p`
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;
export const ToastInfo = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: -1px;
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
