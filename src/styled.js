import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        margin: 0 auto !important;
        width: 800px;
        max-width: 90%;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.5;
    }

    button {
        cursor: pointer;
    }

    a, button {
        -webkit-tap-highlight-color: transparent;
    }
`;