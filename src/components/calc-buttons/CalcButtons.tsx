import React from 'react';
import { StyledCalcButtons } from './StyledCalcButtons';
import Button from "../button/Button";
import { largeButton, lowFuncButton } from "../../core/styles";

interface ICalc {
  setCurrent: any;
  setExpression: any;
  currentValue: string;
}

const CalcButtons: React.FC<ICalc> = ({setCurrent, setExpression, currentValue}) => {
  const onNumberClick = (e: any) => {
    if (currentValue === '0') {
      setCurrent(e.target.innerText);
    } else {
      currentValue.length < 11 && currentValue[0] === '-' && setCurrent(currentValue.concat(e.target.innerText));
      currentValue.length < 10 && currentValue[0] !== '-' && setCurrent(currentValue.concat(e.target.innerText));
    }
  };

  const onClear = () => setCurrent('0');

  const onPlusMinus = () => {
    currentValue[0] === '-' && currentValue !== '0' && setCurrent(currentValue.slice(1));
    currentValue[0] !== '-' && currentValue !== '0' && setCurrent('-'.concat(currentValue));
  }

  const onPercent = () => setCurrent((parseFloat(currentValue)/100).toString());

  const onPoint = () => {
    const isPoint = currentValue.search(',');
    isPoint === -1 && setCurrent(currentValue.concat(','));
  };

  return (
    <StyledCalcButtons>
      <Button style={lowFuncButton} onClick={onClear}>C</Button>
      <Button style={lowFuncButton} onClick={onPlusMinus}>+/-</Button>
      <Button style={lowFuncButton} onClick={onPercent}>%</Button>
      <Button>/</Button>
      <Button onClick={onNumberClick}>7</Button>
      <Button onClick={onNumberClick}>8</Button>
      <Button onClick={onNumberClick}>9</Button>
      <Button>*</Button>
      <Button onClick={onNumberClick}>4</Button>
      <Button onClick={onNumberClick}>5</Button>
      <Button onClick={onNumberClick}>6</Button>
      <Button>-</Button>
      <Button onClick={onNumberClick}>1</Button>
      <Button onClick={onNumberClick}>2</Button>
      <Button onClick={onNumberClick}>3</Button>
      <Button>+</Button>
      <Button style={largeButton} onClick={onNumberClick}>0</Button>
      <Button onClick={onPoint}>.</Button>
      <Button>=</Button>
    </StyledCalcButtons>
  );
};

export default CalcButtons;
