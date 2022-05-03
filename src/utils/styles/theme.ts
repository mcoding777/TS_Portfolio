import { DefaultTheme } from 'styled-components';
import color from './color';

const lightTheme: DefaultTheme = {
    color: {
        background: color.lightgray,
        main: color.lightBlue,
        defaultText: color.darkgray,
        buttonBackground: color.darkgray,
        buttonColor: color.gray,
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
