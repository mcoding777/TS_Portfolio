import { DefaultTheme } from 'styled-components';
import color from './color';

// theme 지정
const lightTheme: DefaultTheme = {
    color: {
        background: color.lightgray,
        main: color.lightBlue,
        sub: color.white,
        defaultText: color.black,
        buttonText: color.darkgray,
        buttonBackground: color.lightgray,
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
