import React, { useState } from "react";
import useLocalStorage from 'use-local-storage'

const App = () => {

  const [isDark, setIsDark] = useLocalStorage("isDark", false)

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <h1>{isDark ? 'Dark' : 'Light'} Mode</h1>
      <button onClick={()=>{
        setIsDark(!isDark)
      }}>
        <i class={isDark ? "ri-sun-fill" : "ri-moon-clear-fill"}></i>
      </button>
    </div>
  );
};

export default App;
