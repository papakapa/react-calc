import React from 'react';
import { StyledAppWrapper, StyledCalcWrapper } from './core/StyledApp';
import Display from './components/calc-display/Display';
import CalcButtons from "./components/calc-buttons/CalcButtons";

function App() {
  return (
    <StyledAppWrapper>
      <StyledCalcWrapper>
        <Display />
        <CalcButtons />
      </StyledCalcWrapper>
    </StyledAppWrapper>
  );
}

export default App;
