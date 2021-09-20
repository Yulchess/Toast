import styled from "styled-components";

export const ModalStyles = styled.div`
width:100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  transition: 0.5s;
`;

export const WindowStyle = styled.div`
  margin: 10px;
  width: 200px;
  height: 20px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props=>props.theme.backgroundColor.main};
`;
