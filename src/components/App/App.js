import { useState, useContext } from "react";
import { Modal } from "../Modal/modal";
import { MainContainer, Content } from "./components";
import { infoNotification } from "../../theme";
import { DesignContext } from "../../Context/DesignProvider";
import { ThemeProvider } from "styled-components";

export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectToastTheme, setselectToastTheme] = useState(infoNotification);
  const { theme,changeNotification} = useContext(DesignContext);
  const buttonHandle = () => {
    setModalActive(true);
  };

  const selectOnChangeHandle = (event) => {
    changeNotification(event.target.value);
    setselectToastTheme(event.target.value);
  };

  return (
    <ThemeProvider theme = {theme}>
      <MainContainer>
        <Content>
          <select value={selectToastTheme} onChange={selectOnChangeHandle}>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
          <button onClick={buttonHandle}>Click</button>
          <Modal active={modalActive} setActive={setModalActive} />
        </Content>
      </MainContainer>
    </ThemeProvider>
  );
};
