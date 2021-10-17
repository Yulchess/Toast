import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: absolute;
  margin: ${(props) => props.theme.spacing[3]}px;
  top: ${({ position, toastPosition }) => toastPosition[position].top};
  bottom: ${({ position, toastPosition }) => toastPosition[position].bottom};
  left: ${({ position, toastPosition }) => toastPosition[position].left};
  right: ${({ position, toastPosition }) => toastPosition[position].rigth};
`;
export const ToastContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing[4]}px;
  height: ${({ theme }) => theme.TOAST_CONTENT_HEIGTH}px;
  width: ${({ theme }) => theme.TOAST_CONTENT_WIDTH}px;
  border-radius: ${(props) => props.theme.borderRadius[1]}px;
  margin: ${(props) => props.theme.spacing[2]}px;
  background-color: ${(props) => props.backgroundColor};
`;

export const ToastInfo = styled.p`
  font-size: ${(props) => props.theme.fontSize[1]}px;
  text-align: left;
  height: ${(props) => props.theme.spacing[7]}px;
  margin: 0px;
  margin-left: ${(props) => props.theme.spacing[4]}px;
  color: ${(props) => props.toastColor};
`;

export const ToastContentBlock = styled.div`
  display: flex;
  width: ${({ theme }) => theme.TOAST_CONTENT_BLOCK_WIDTH}%;
  height: ${({ theme }) => theme.TOAST_CONTENT_BLOCK_HEIGTH}%;
  align-items: center;
  & > svg {
    width: 35px;
    height: 35px;
  }
`;

export const ToastCloseButton = styled.div`
  cursor: pointer;
  position: relative;
  right: ${(props) => props.theme.spacing[5]}px;
  top: ${(props) => props.theme.spacing[0]}px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.TOAST_CLOSE_BUTTON_WIDTH}px;
    height: ${({ theme }) => theme.TOAST_CLOSE_BUTTON_HEIGTH}px;
    background-color: ${({ isBlack }) => (isBlack ? 'black' : 'white')};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const ToastIcon = styled.img`
  width: ${({ theme }) => theme.TOAS_ICON_WIDTH}px;
  height: ${({ theme }) => theme.TOAST_CLOSE_BUTTON_HEIGTHTOAS_ICON_HEIGTH}px;
`;
