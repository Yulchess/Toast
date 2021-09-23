import {
  ModalStyles,
  WindowStyle,
  ToastText,
  ToastCloseButton,
} from "./styles";

export const Modal = ({ active }) => {
  return (
    <ModalStyles active={active}>
      <WindowStyle>
        <ToastText>hey</ToastText>
        <ToastCloseButton></ToastCloseButton>
      </WindowStyle>
    </ModalStyles>
  );
};
