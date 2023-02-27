import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    font-family: ${({ theme }) => theme.fonts.primaryFamily};
    }
    body {
        margin: 0;
    }
`;

export * from './theme';
