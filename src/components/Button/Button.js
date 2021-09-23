import React from "react";
import { ButtonContent } from "./style";

export const Button = ({ label, className, handleClick }) => {
  return (
    <>
      <ButtonContent style={{ className }} onClick={handleClick}>
        {label}
      </ButtonContent>
    </>
  );
};
