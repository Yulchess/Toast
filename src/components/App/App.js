import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import errorImage from "../../assets/Error.png";
import infoImage from "../../assets/Info.png";
import successImage from "../../assets/Success.png";
import warningImage from "../../assets/Warning.png";
import { BUTTON_PROPS } from "../../constants.js/index";
import { DesignContext } from "../../context/index";
import { ToastPortal } from "../../portal";
import { Button } from "../Button";
import {
  CheckBoxContent,
  CheckBoxText,
  Content,
  MainContainer,
  SelectBox,
} from "./components";

export const App = () => {
  const { theme } = useContext(DesignContext);
  let [checkValue, setCheckValue] = useState(false);
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("TopRight");
  let toastProperties = null;

  const showToast = (type) => {
    const id = Date.now();

    switch (type) {
      case "success":
        toastProperties = {
          id,
          description: "Success toast example",
          backgroundColor: `${theme.colors.shamrock}`,
          color: `${theme.colors.white}`,
          icon: successImage,
        };
        break;
      case "error":
        toastProperties = {
          id,
          description: "Error toast example",
          backgroundColor: `${theme.colors.flamePea}`,
          color: `${theme.colors.white}`,
          icon: errorImage,
        };
        break;
      case "info":
        toastProperties = {
          id,
          description: "Info toast example",
          backgroundColor: `${theme.colors.darkOrchid}`,
          color: `${theme.colors.white}`,
          icon: infoImage,
        };
        break;
      case "warning":
        toastProperties = {
          id,
          description: "Warning toast example",
          backgroundColor: `${theme.colors.minionYellow}`,
          color: `${theme.colors.black}`,
          icon: warningImage,
        };
        break;

      default:
        setList([]);
    }

    setList([...list, toastProperties]);
  };

  const onCheckBoxChange = () => {
    checkValue = !checkValue;
    setCheckValue(checkValue);
  };

  const selectPosition = (e) => {
    setPosition(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Content>
          <div>
            {BUTTON_PROPS.map((e) => (
              <Button
                key={e.id}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            ))}
          </div>
          <CheckBoxContent>
            <input
              type="checkbox"
              value={checkValue}
              onChange={onCheckBoxChange}
            ></input>
            <CheckBoxText>Auto close</CheckBoxText>
          </CheckBoxContent>
          <SelectBox value={position} onChange={selectPosition}>
            <option value="TopRight">Top Rigth</option>
            <option value="TopLeft">Top Left</option>
            <option value="BottomLeft">Bottom Rigth</option>
            <option value="BottomRight">Bottom Left</option>
          </SelectBox>
        </Content>
      </MainContainer>
      <ToastPortal
        toastList={list}
        position={position}
        checkValue={checkValue}
        label={BUTTON_PROPS.label}
      />
    </ThemeProvider>
  );
};
