import { useState, useContext } from "react";
import {
  MainContainer,
  Content,
  CheckBoxContent,
  CheckBoxText,
  SelectBox,
} from "./components";
import { infoNotification } from "../../theme";
import { DesignContext } from "../../Context/DesignProvider";
import { ThemeProvider } from "styled-components";
import { ToastPortal } from "../../Portal";
import { Button } from "../Button";
import { Toast } from "../Toast";
// import Success from "/src/assets/Success.png";

export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectToastTheme, setselectToastTheme] = useState(infoNotification);
  const { theme, changeNotification } = useContext(DesignContext);
  let [checkValue, setCheckValue] = useState(false);
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("TopRight");

  const [autoDeleteTime, setAutoDeleteTime] = useState(2000);

  // const buttonHandle = () => {
  //   setModalActive(true);
  // };

  const selectOnChangeHandle = (event) => {
    changeNotification(event.target.value);
    setselectToastTheme(event.target.value);
  };

  let toastProperties = null;

  const BUTTON_PROPS = [
    {
      id: 1,
      type: "success",
      label: "Success",
    },
    {
      id: 2,
      type: "error",
      label: "Error",
    },
    {
      id: 3,
      type: "info",
      label: "Info",
    },
    {
      id: 4,
      type: "warning",
      label: "Warning",
    },
  ];

  const showToast = (type) => {
    const id = Date.now();

    switch (type) {
      case "success":
        toastProperties = {
          id,
          description: "Success toast example",
          backgroundColor: `${theme.colors.shamrock}`,
          color: `${theme.colors.white}`,
        };
        break;
      case "error":
        toastProperties = {
          id,
          description: "Error toast example",
          backgroundColor: `${theme.colors.flamePea}`,
          color: `${theme.colors.white}`,
        };
        break;
      case "info":
        toastProperties = {
          id,
          description: "Info toast example",
          backgroundColor: `${theme.colors.darkOrchid}`,
          color: `${theme.colors.white}`,
        };
        break;
      case "warning":
        toastProperties = {
          id,
          description: "Warning toast example",
          backgroundColor: `${theme.colors.minionYellow}`,
          color: `${theme.colors.black}`,
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
    setList([]);
  };

  const selectPosition = (e) => {
    setPosition(e.target.value);
    setList([]);
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
        autoDelete={checkValue}
        autoDeleteTime={autoDeleteTime}
      />
    </ThemeProvider>
  );
};
