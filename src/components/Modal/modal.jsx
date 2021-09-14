import { ModalSttyles, WindowStyle } from "./styles";
import "./components.css";

export const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      active={true}
      onClick={() => setActive(false)}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};
