import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
    }

    * {
        font-family: 'Courier New', Courier, monospace;
    }

    :root {
        --transparent-bg: rgba(0, 0, 0, 0.6);
        --main-yellow: #ffe53b;
        --main-white: #f0f0f0;
        --main-black: #fffff;
        --main-red: #d7342b;
        --modal-bg: #d3d3d3;
    }
`;
