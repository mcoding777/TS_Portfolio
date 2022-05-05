import { DefaultTheme } from 'styled-components';
import color from './color';

const lightTheme: DefaultTheme = {
    color: {
        background: color.lightgray,
        main: color.lightBlue,
        accent: color.blue,
        border: color.gray,
        defaultText: color.darkgray,
        buttonBackground: color.darkgray,
        buttonHoverColor: color.darkgray,
    },
};

const darkTheme: DefaultTheme = {
    color: {
        background: '#',
        main: '#',
        sub: 'white',
    },
};

export { lightTheme, darkTheme };
