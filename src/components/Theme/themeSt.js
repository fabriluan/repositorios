import styled from "styled-components";

export const ThemeSt = styled.div `
    position: fixed;
    bottom: 5%;
    left: 3%;
    width: 64px;
    height: 64px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.9rem;
    background-color: ${ (props) => props.isOn ?  '#F4D61A' :  '#792BF0'};
    cursor: pointer;

    :hover{
        transform: scale(1.1);
        transition: 0.7s;
    }
`