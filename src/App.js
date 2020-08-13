import React from "react";
import "./App.css";
import {Header} from './header'
import {Potd} from './potd'
import styled from 'styled-components'

const StyledApp = styled.div`
  background-color:${props => props.theme.color1};
  color:${props => props.theme.white};
  width:100%
`

function App() {
  return (
    <StyledApp className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>

      <Header />

      <Potd />
    </StyledApp>
  );
}

export default App;
