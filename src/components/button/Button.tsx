import React from 'react';
import { StyledButton } from './StyledButton';

interface IButton {
  style?: any;
}

const Button: React.FC<IButton> = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
};

export default Button;