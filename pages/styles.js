import styled from "styled-components";
import Image from 'next/image';


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
export const Gif = styled(Image)`

    width: 3%;
    height: fit-content;
    margin-left: 1%;
    
`

