import styled from "styled-components";





export const Container = styled.div`

background-color: ${props => props.theme.colors.primary_background};
height: 100vh;
padding-top: 1.5em;

h1 {
    margin-left: 2.5%;
    font-family: 'Star Jedi';
    color: ${props => props.theme.colors.contrast};
}
`

export const Carrousel = styled.div`

    margin-top: 2%;
    display: flex;
    /* background-color: red; */
    
`

export const Test = styled.div`

    background-color: red;
    
`



export const Loading = styled.h1`

    display: flex;
    justify-content: center;
    align-items: center;
    height:90vh;

`

