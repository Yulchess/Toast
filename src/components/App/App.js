import { useCallback, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { BUTTON_PROPS } from "../../constants/buttonInfo";
import {
  ERROR_TOAST,
  INFO_TOAST,
  SUCCESS_TOAST,
  WARNING_TOAST,
} from "../../constants/toastProperties";
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "../../constants/toastProperties";
import { TOAST_TYPE } from "../../constants/toastType";
import GlobalStyles from "../../globalStyles";
import { ToastPortal } from "../../portal";
import { theme } from "../../theme";
import { Button } from "../Button";
import {
  ButtonContent,
  Checkbox,
  CheckBoxContent,
  CheckBoxText,
  Content,
  MainContainer,
  OptionValue,
  SelectBox,
} from "./style";

export const App = () => {
  const [checkValue, setCheckValue] = useState(false);
  const [list, setList] = useState([]);
  const [position, setPosition] = useState(TOP_RIGHT);

  const config = {
    [TOAST_TYPE.Success]: SUCCESS_TOAST,
    [TOAST_TYPE.Error]: ERROR_TOAST,
    [TOAST_TYPE.Info]: INFO_TOAST,
    [TOAST_TYPE.Warning]: WARNING_TOAST,
  };

  const showToast = (type) => () => {
    const id = Date.now().toString();
    const options = config[type];

    if (options) {
      setList([...list, { ...options, id }]);
    } else {
      setList([]);
    }
  };

  const handleOnCheckBoxChange = useCallback(
    () => setCheckValue(!checkValue),
    [checkValue]
  );

  const handleSelectPosition = (e) => {
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
                type={e.type}
                handleClick={showToast(e.type)}
              />
            ))}
          </ButtonContent>
          <CheckBoxContent>
            <Checkbox
              type="checkbox"
              value={checkValue}
              onChange={handleOnCheckBoxChange}
            ></Checkbox>
            <CheckBoxText>Auto close</CheckBoxText>
          </CheckBoxContent>
          <SelectBox value={position} onChange={handleSelectPosition}>
            <OptionValue value={TOP_RIGHT}>Top Rigth</OptionValue>
            <OptionValue value={TOP_LEFT}>Top Left</OptionValue>
            <OptionValue value={BOTTOM_LEFT}>Bottom Rigth</OptionValue>
            <OptionValue value={BOTTOM_RIGHT}>Bottom Left</OptionValue>
          </SelectBox>
        </Content>
      </MainContainer>
      <ToastPortal
        toastList={list}
        position={position}
        checkValue={checkValue}
        setList={setList}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
};
