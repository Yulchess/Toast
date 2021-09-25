import React from "react";

import { ButtonContent } from "./style";

export const Button = ({ label, className, handleClick }) => {
  return (
    <>
      <ButtonContent label={label} style={{ className }} onClick={handleClick}>
        {label}
      </ButtonContent>
    </>
  );
};
