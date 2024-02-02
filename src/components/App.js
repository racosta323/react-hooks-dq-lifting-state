import React from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";
import { useState } from "react"

function App() {

const [theme, setTheme] = useState(false)

function handleDark(){
  setTheme(!theme)
}

  return (
    <DarkModeWrapper darkMode ={theme}>
      <Header darkMode = { theme } onChangeTheme ={handleDark}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
