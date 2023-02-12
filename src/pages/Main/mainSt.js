import styled, { css, keyframes } from "styled-components";

export const MainContent = styled.section `
    width: 100%;
    max-width: 700px;
    background-color: ${(props) => props.theme.accent};
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0px 0px 10px -5px black;
    border-radius: 0.5rem;

    h2{
        display: flex;
        font-size: 1.5rem;
        margin-bottom: 15px;

        svg{
            margin-right: 10px;
        }
    }
`

export const MainForm = styled.form `

    display: flex;
    justify-content: space-between;

    input{
        border: 1px solid black;
        width: 92%;
        height: 35px;
        border-radius: 0.5rem;
        font-size: 1rem;
        padding: 5px;
        border: 2px solid ${props => props.isAlert ? '#ff0000' : '#000000'};
    }
`

const animation = keyframes `
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const MainButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.isLoading,
}))`

    width: 6%;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        background-color: #442BFA;
        border: 0;

        svg{
            font-size: 1.3rem;
            color: white;
        }

        &[disabled]{
            cursor: not-allowed;    
            opacity: 0.5;
        }

        ${(props) => props.isLoading &&
            css`
                svg{
                    animation: ${animation} 2s linear infinite;
                }
            `
        }

`

export const List = styled.ul `
    list-style: none;
    margin-top: 30px;

    li{
        padding: 12px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1.1rem;

        span{
            display: flex;
            align-items: center;
            
            button{
                display: flex;
                align-items: center;
                background-color: none;
                margin-right: 10px;
                background-color: transparent;
                border: none;
            }
        }

        svg{
            font-size: 1.2rem;
            color: ${(props) => props.theme.titles};
        }
    }
    
    li + li{
        border-top: 1px solid ${props => props.theme.titles};
    }
    
`