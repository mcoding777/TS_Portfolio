import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { lightTheme } from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
