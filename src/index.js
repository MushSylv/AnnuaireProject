import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import  theme  from './Style/theme'
import  GlobalStyle  from './Style/GlobalStyle'
import { Router } from 'react-router-dom';
import store from './Stores/';
import history from './history';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

