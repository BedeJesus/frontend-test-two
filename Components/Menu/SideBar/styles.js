import styled from "styled-components";

export const Container = styled.div`

    background-color: hsl(230, 21%, 11%,0.9);
    position:absolute;
    height: 14em;
    top: 4.9em;
    right: 0;
    width: 20em;
    transition: .3s;
    z-index: 2;

    a{
    color: yellow;
    font-family: 'Star Sith';
    text-decoration: none;   
    margin-top: 1em ;
    margin-bottom:1em ;
    font-size: 1.3em;
    padding-left: 4em;
    padding-right: 3.1em;    
    display: flex;

    &:hover{
    font-family: 'Star Jedi';
    transition: .3s;

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

















