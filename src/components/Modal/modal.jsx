import { Portal } from "../../Portal";
import { ModalStyles, WindowStyle } from "./styles";
import { theme } from "../../theme";

export const Modal = ({ active, setActive }) => {
  return (
    <Portal>
      <ModalStyles active={active}>
        <WindowStyle>
          <p>Title</p>
        </WindowStyle>
      </ModalStyles>
    </Portal>
  );
};
