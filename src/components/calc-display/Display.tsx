import React from 'react';
import { StyledCurrentValue, StyledDisplay, StyledExpression } from './StyledDisplay';

interface IDisplay {
  expression: string;
  currentValue: string;
}

const Display:React.FC<IDisplay> = ({expression, currentValue}) => {
  return (
    <StyledDisplay>
      <StyledExpression>{expression}</StyledExpression>
      <StyledCurrentValue>{currentValue}</StyledCurrentValue>
    </StyledDisplay>
  );
};

export default Display;