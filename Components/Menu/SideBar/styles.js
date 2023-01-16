import styled from "styled-components";

export const Container = styled.div`

    background-color: ${props => props.theme.colors.secundary_background};
    opacity: 0.8;
    position:absolute;
    height: 14em;
    top: 4.9em;
    right: 0;
    width: 20em;
    transition: .3s;
    z-index: 2;

    a{
        display: flex;
        align-items: center;
    color: yellow;
    font-family: 'Star Jedi';
    text-decoration: none;   
    margin-top: 1em ;
    margin-bottom:1em ;
    font-size: 1.3em;
    padding-left: 4em;
    padding-right: 3.1em;    
    display: flex;

    transition: .5s;


    &:hover{
        color:${props => props.theme.colors.primary_background} ;
    }
}

`

export const Options = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const User = styled.div`

    margin-top: 5%;
    margin-right: 0.4em;
`

export const Others = styled.div`

    margin-top: 8%;
    margin-right: 0.4em;
`

















