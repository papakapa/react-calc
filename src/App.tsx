import React, { useState } from 'react';
import { StyledAppWrapper, StyledCalcWrapper } from './core/StyledApp';
import Display from './components/calc-display/Display';
import CalcButtons from "./components/calc-buttons/CalcButtons";

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [currentExpression, setCurrentExpression] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [nextValue, setNextValue] = useState(false);

  return (
    <StyledAppWrapper>
      <StyledCalcWrapper>
        <Display expression={currentExpression !== '0' ? currentExpression : ''} currentValue={currentValue}/>
        <CalcButtons
          setCurrent={setCurrentValue}
          setExpression={setCurrentExpression}
          setOperand={setCurrentOperand}
          setPreviousValue={setPreviousValue}
          setNext={setNextValue}
          currentOperand={currentOperand}
          currentValue={currentValue}
          nextValue={nextValue}
          previousValue={previousValue}
        />
      </StyledCalcWrapper>
    </StyledAppWrapper>
  );
}

export default App;
