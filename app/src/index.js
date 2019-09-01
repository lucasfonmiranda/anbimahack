import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { theme } from './muiTheme';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <HashRouter forceRefresh={!supportsHistory}>
        <Provider store={store} >
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </Provider>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
