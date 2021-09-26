import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { BUTTON_PROPS } from "../../constants/ButtonInfo";
import {
  ERROR,
  ERROR_TOAST,
  INFO,
  INFO_TOAST,
  SUCCESS,
  SUCCESS_TOAST,
  WARNING,
  WARNING_TOAST,
} from "../../constants/ToastProperties";
import { DesignContext } from "../../context/index";
import { ToastPortal } from "../../portal";
import { Button } from "../Button";
import {
  BottomLeftValue,
  BottomRigthValue,
  ButtonContent,
  Checkbox,
  CheckBoxContent,
  CheckBoxText,
  Content,
  LeftValue,
  MainContainer,
  RigthValue,
  SelectBox,
} from "./style";

export const App = () => {
  const { theme } = useContext(DesignContext);
  const [checkValue, setCheckValue] = useState(false);
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("TopRight");

  const showToast = (type) => {
    const id = Date.now();
    switch (type) {
      case SUCCESS:
        setList([...list, { ...SUCCESS_TOAST, id }]);
        break;
      case ERROR:
        setList([...list, { ...ERROR_TOAST, id }]);
        break;
      case INFO:
        setList([...list, { ...INFO_TOAST, id }]);
        break;
      case WARNING:
        setList([...list, { ...WARNING_TOAST, id }]);
        break;

      default:
        setList([]);
    }
  };

  const onCheckBoxChange = () => {
    setCheckValue(!checkValue);
  };

  const selectPosition = (e) => {
    setPosition(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Content>
          <ButtonContent>
            {BUTTON_PROPS.map((e) => (
              <Button
                key={e.id}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            ))}
          </ButtonContent>
          <CheckBoxContent>
            <Checkbox
              type="checkbox"
              value={checkValue}
              onChange={onCheckBoxChange}
            ></Checkbox>
            <CheckBoxText>Auto close</CheckBoxText>
          </CheckBoxContent>
          <SelectBox value={position} onChange={selectPosition}>
            <RigthValue value="TopRight">Top Rigth</RigthValue>
            <LeftValue value="TopLeft">Top Left</LeftValue>
            <BottomLeftValue value="BottomLeft">Bottom Rigth</BottomLeftValue>
            <BottomRigthValue value="BottomRight">Bottom Left</BottomRigthValue>
          </SelectBox>
        </Content>
      </MainContainer>
      <ToastPortal
        toastList={list}
        position={position}
        checkValue={checkValue}
        setList={setList}
      />
    </ThemeProvider>
  );
};
