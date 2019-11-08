import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './Style/theme'
import store from './Stores/index'
import './App.css';
import Main from './Features/Main'
import GlobalStyle from './Style/GlobalStyle'


function App() {
  return (
    <Main />
   );
}

export default App;
