import styled from "styled-components";

export const Container = styled.div`

    background-color: darkslategrey;
    padding-top: 1.5em;

    h1 {
    color: yellow;
    margin-left: 2.5%;
    font-family: 'Star Jedi';
    
}

`

export const AllCharacters = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 3%;
`

export const CharacterCard = styled.div`

display: flex;
    flex-direction: column;
    background-color: black;
    margin-bottom: 1em;
    height: 15em;
    width: 21em;
    border: 3px solid red;
    border-radius: 10px;
    box-shadow: 10px 8px 13px rgb(0, 0, 0);

    h1 {
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    color: yellow;
}

span {
    color: aquamarine;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 5% 0 0 5%;
}

p {
    color: yellow;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 5% 0 0 5%;
}

`

export const Loading = styled.h1`

    display: flex;
    justify-content: center;
    align-items: center;
    height:90vh;
`



