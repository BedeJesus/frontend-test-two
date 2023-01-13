import styled from "styled-components";

export const Container = styled.ul`

    display: flex;
    
    justify-content: space-evenly;
    align-items: center;
    height: 5em;

 button {
    
    background-color: transparent;
    border: 0.125em solid yellow;
    border-radius: 1em;
    color: yellow;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    padding: 1em 2.3em;
    text-align: center;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    
    &:disabled{
        pointer-events: none;
    }

    &:hover {
    color: black;
    background-color: yellow;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
   
    }

    &:active {
    box-shadow: none;
    transform: translateY(0);
}
}









    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* button{
        background-color: darkslategrey;
        color: yellow;
        font-size:2em;
        height: 2em;
        width: 5em;
        border: 3px solid black;
        border-radius: 5px;

        &:hover{
            cursor: pointer;
            background-color: yellow;
            color: black;

        }
    } */




`