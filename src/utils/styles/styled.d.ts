import 'styled-components';
import Colors from './color';

//기본 styled-component 모듈 선언 및 color 객체 추가
declare module 'styled-components' {
    export interface DefaultTheme {
        color: { [key in Colors]: string };
    }
}
