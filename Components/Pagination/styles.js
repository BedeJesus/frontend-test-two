import styled from "styled-components";

export const Container = styled.ul`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5em;

 button {
    
    background-color: transparent;
    border: 0.125em solid ${props => props.theme.colors.contrast};
    border-radius: 1em;
    color: ${props => props.theme.colors.contrast};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    padding: 1em 2.3em;
    text-align: center;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    
    &:disabled{
        pointer-events: none;
    }

    &:hover {
    color: black;
    background-color: ${props => props.theme.colors.contrast};
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
   
    }

    &:active {
    box-shadow: none;
    transform: translateY(0);
}
}









    
    
    
    
    



`