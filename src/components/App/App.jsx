import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';

import './App.css';

function App() {
  const [ darkMode, setDarkMode ] = useState( false );

  function toggleDarkMode() {
    setDarkMode( prevDarkMode => !prevDarkMode );
  }

  return (
    <div id="app" className={ darkMode ? 'dark' : 'light' }>
      <Header toggleDarkMode={ toggleDarkMode } />
      <Main />
    </div>
  )
}

export default App
