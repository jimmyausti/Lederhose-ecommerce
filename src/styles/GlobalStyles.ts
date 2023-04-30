import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background: #101418;
        height: 100%;
        color: white;
    }
    h1, h2, h3, h5 {
        font-family: 'Instrument Serif', serif;
    }
    p {
        font-family: 'Roboto', sans-serif;
    }
`;
export default GlobalStyle;