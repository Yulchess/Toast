// @todo: для всех строк используем одинарные ковычки ', кроме задания текстовых атрибутов компонентам (возможно решится при подключении конфига air-bnb)
import React from "react";

import { ButtonContent } from "./style";

export const Button = ({ label, handleClick, type }) => {
  return (
    <ButtonContent type={type} onClick={handleClick}>
      {label}
    </ButtonContent>
  );
};
