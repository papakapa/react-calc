import React from 'react';
import { StyledCalcButtons } from './StyledCalcButtons';
import Button from "../button/Button";
import { largeButton, lowFuncButton } from "../../core/styles";

const CalcButtons: React.FC = () => {
 return(
   <StyledCalcButtons>
     <Button style={lowFuncButton}>C</Button>
     <Button style={lowFuncButton}>+/-</Button>
     <Button style={lowFuncButton}>%</Button>
     <Button>/</Button>
     <Button>7</Button>
     <Button>8</Button>
     <Button>9</Button>
     <Button>*</Button>
     <Button>4</Button>
     <Button>5</Button>
     <Button>6</Button>
     <Button>-</Button>
     <Button>1</Button>
     <Button>2</Button>
     <Button>3</Button>
     <Button>+</Button>
     <Button style={largeButton}>0</Button>
     <Button>.</Button>
     <Button>=</Button>
   </StyledCalcButtons>
 );
};

export default CalcButtons;
