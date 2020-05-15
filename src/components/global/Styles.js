import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

    html {
        width: 100%;
        height: 100%;
        font-size: 10px;
    }

    body {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    html,
    body {
        margin: 0px;
        padding: 0px;
    }

    #root {
        width: 100%;
    }

    button {
        -webkit-appearance: none;
    }
`;

export default GlobalStyle;
