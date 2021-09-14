import styled from "styled-components";

export const ModalSttyles = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: rgba(); */
  position: fixed;
  display: flex;
  justify-content: flex-end;
  transform: ${(props) => (props.active ? "scale(0)" : "scale(1)")};
`;

export const WindowStyle = styled.div`
  width: 200px;
  height: 20px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  background-color: yellow;
`;
