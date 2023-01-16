import styled from "styled-components";


export const Container = styled.div`

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
    flex-wrap: wrap;
    justify-content:space-evenly;

`



export const Loading = styled.h1`

    display: flex;
    justify-content: center;
    align-items: center;
    height:70vh;

`

