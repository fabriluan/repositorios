import styled, { keyframes } from "styled-components";



const animation = keyframes `
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const LoadingSt = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 1.8rem;
        font-weight: 300;
    }
    svg{
        margin-top: 20px;
        font-size: 2rem;
        animation: ${animation} 2s linear infinite;
    }
`
