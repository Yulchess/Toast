import React from 'react';

import { ButtonContent } from './style';

export const Button = ({ label, handleClick, type }) => {
  return (
    <ButtonContent type={type} onClick={handleClick}>
      {label}
    </ButtonContent>
  );
};
