import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpeg";

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
        background-image: url("${background}");
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    button {
        cursor: pointer;
    }

    a, button {
        -webkit-tap-highlight-color: transparent;
    }
`;