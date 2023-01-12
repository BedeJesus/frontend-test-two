import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6em;
    color: yellow;
    height: 5em;
    background-color: black;
    box-shadow: 0 0 10px 2px black;
`

export const StarWars = styled(Link)`

    font-family: 'Star Jedi';
    font-size: 2em;
    margin-left: 2%;
    text-decoration: none;
    color: yellow;
    background-color: red;

    @media(max-width : 1000px) {
    width: 30em;
        
    }

`

export const Buttons = styled.div`

    display: flex;
    justify-content: space-evenly;
    font-size: 1.5em;
    width: 30em;
    overflow: hidden;
    
   

    a {
    font-family: 'Star Jedi';
    text-decoration: none;
    color: yellow;
    transition: 2s;

    &:hover{
    font-family: 'Star Jedi';
    }

    @media(max-width : 1000px) {
    display: none;
    
    
    }

    
 

}

`

export const ToggleOne = styled.div`

    margin-top: 1%;   
    
    
    @media(max-width : 1000px) {
        display: none;
    }

`

export const ToggleTwo = styled.div`
    
    @media(max-width : 1000px) {
        margin-top: 6%;        
        margin-right: 1em;
        
    }

`

export const SubMenu = styled.div`

    display: none;

    @media(max-width : 1000px) {
    display: flex;

    button{
        margin-top: 1%; 
        background-color:transparent;
        color: yellow;
        border: none;

        &:hover{
            cursor: pointer;
        }

    }
    }
`







