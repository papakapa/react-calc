import React from 'react';
import { StyledButton } from './StyledButton';

interface IButton {
  style?: any;
  onClick?: (e: any) => void;
}

const Button: React.FC<IButton> = (props) => {
  return (
    <StyledButton {...props} tabIndex={-1}>{props.children}</StyledButton>
  );
};

export default Button;