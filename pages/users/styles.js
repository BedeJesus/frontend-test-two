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

export const AllUsers = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 3%;
`

export const UserCard = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.card_background};
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
    color: ${props => props.theme.colors.contrast};
}

span {
    color: ${props => props.theme.colors.contrast};
    font-weight: 700;
    font-family: 'Kumbh Sans', sans-serif;
    margin: 5% 0 0 5%;
}

p {
    color: ${props => props.theme.colors.text};
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



