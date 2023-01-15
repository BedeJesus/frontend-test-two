import styled from "styled-components";

export const Container = styled.div`

background-color: ${props => props.theme.colors.primary_background};
padding-top: 1.5em;

h1 {
    color: ${props => props.theme.colors.contrast};
    margin-left: 2.5%;
    font-family: 'Star Jedi';
}

`

export const AllPosts = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 3%;

`


export const PostCard = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.card_background};
    margin-bottom: 1em;
    height: 23em;
    width: 25em;
    border: 4px solid red;
    border-radius: 10px;
    box-shadow: 10px 8px 13px rgb(0, 0, 0);


    h1 {
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.contrast};
    text-align: center;
}

span {
    color: ${props => props.theme.colors.contrast};
    font-family: 'Kumbh Sans', sans-serif;
}

p {
    color: ${props => props.theme.colors.text};
    text-align:justify;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 6% 4% ;
}

`

export const Loading = styled.h1`

    display: flex;
    justify-content: center;
    align-items: center;
    height:90vh;

`