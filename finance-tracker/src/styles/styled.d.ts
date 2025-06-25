import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme{
    title: string,
    colors: {
        back: string,
        backie: string,
        background: string,

        primary: string,
        secondary: string,
        tertiary: string,

        white: string,
        black: string,
        gray: string,

        dashboard: string,
        entry: string,
        exit: string,
        register: string,
        gradient : string,
    },

};
}
