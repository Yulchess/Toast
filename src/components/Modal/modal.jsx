import { ModalStyles, WindowStyle } from "./styles";

export const Modal = ({ active, setActive }) => {

  const closeModal = ()=>{
    setActive(false)
  }

  return (
    <ModalStyles
      onClick={closeModal}
      active={active}
    >
      <WindowStyle
        onClick={(e) => e.stopPropagation()}
      ></WindowStyle>
    </ModalStyles>
  );
};
