import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.titles};
        font-family: sans-serif;
    }

    button{
        cursor: pointer
    }
`