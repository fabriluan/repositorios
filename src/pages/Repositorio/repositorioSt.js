import styled from "styled-components";

export const Owner = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        width: 100%;

        a{
            display: flex;
            background-color: transparent;
            border: 0;

            svg{
                font-size: 2.1rem;
                color: ${(props) => props.theme.titles};
            }
        }
    }

    img{
        width: 100%;
        max-width: 250px;
        margin-bottom: 20px;
    }

    h2{
        font-size: 2.2rem;
        text-transform: uppercase;
    }

    p{
        text-align: center;
        font-size: 1.2rem;
    }

`

export const ButtonState = styled.section `
    width: 100%;
    padding: 20px 0;

    button{
        font-size: 1.1rem;
        background-color: ${props => props.theme.titles};
        color: ${props => props.theme.accent};
        padding: 8px;
        border-radius: 0.5rem;
        border: 0;

        :nth-child(${props => props.isActive + 1}){
            background-color: ${props => props.theme.text};
        }
    }

    button + button{
        margin-left: 20px;
    }
`

export const IssuesList = styled.ul `
    width: 100%;
    margin-top: 20px;

    li{
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img{
            width: 100%;
            max-width: 70px;
            max-height: 70px;
            border-radius: 2.5rem;
            margin-right: 15px;
            border: 1px solid ${props => props.theme.titles};
        }

        div{
            display: flex;
            flex-direction: column;

            strong{

                font-size: 1.1rem;
                margin-bottom: 8px;

                  a{
                    color: ${props => props.theme.titles};
                    text-decoration: none;
                  }

                  span{
                    margin: 0 10px;
                    padding: 2px 5px;
                    border-radius: 0.5rem;
                    color: ${props => props.theme.accent};
                    background-color: ${props => props.theme.titles};
                  }

            }
        }
    }
    
`

export const ButtonPage = styled.section `
    width: 100%;
    display: flex;
    justify-content: space-between;

    button{
        font-size: 1.1rem;
        font-weight: 700;
        padding: 7px 10px;
        border-radius: 0.5rem;
        border: 0;
        color: ${props => props.theme.accent};
        background-color: ${props => props.theme.titles};

        :hover{
            transform: scale(1.02);
            transition: 0.7s;
        }

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`