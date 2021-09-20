import styled from "styled-components";

export const ModalStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top:0;
  left:0;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  transition: 0.5s;
`;

export const WindowStyle = styled.div`
  width: 200px;
  height: 20px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  background-color: rebeccapurple;
`;
