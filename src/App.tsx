import React, { useState } from 'react';
import { StyledAppWrapper, StyledCalcWrapper } from './core/StyledApp';
import Display from './components/calc-display/Display';
import CalcButtons from "./components/calc-buttons/CalcButtons";

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [currentExpression, setCurrentExpression] = useState('0');

  return (
    <StyledAppWrapper>
      <StyledCalcWrapper>
        <Display expression={currentExpression !== '0' ? currentExpression : ''} currentValue={currentValue}/>
        <CalcButtons setCurrent={setCurrentValue} setExpression={setCurrentExpression} currentValue={currentValue}/>
      </StyledCalcWrapper>
    </StyledAppWrapper>
  );
}

export default App;
