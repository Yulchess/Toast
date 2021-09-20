import { useState } from "react";
import { Modal } from "../Modal/modal";
import { MainContainer, Content } from "./components";


export const App = () => {

  const [modalActive, setModalActive] = useState(false);

  const buttonHandle = ()=>{
    setModalActive(true)
  }

  return (
    <MainContainer>
      <Content>
        <select>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
        <button onClick={buttonHandle}>Click</button>
        <Modal active={modalActive} setActive={setModalActive} />
      </Content>
    </MainContainer>
  );
};
