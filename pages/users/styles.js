import styled from "styled-components";

export const Container = styled.div`

    padding-top: 1.5em;

    h1 {
    color: ${props => props.theme.colors.contrast};
    font-family: 'Star Jedi';
    
}

`

export const Top = styled.div`

    display: flex;
    justify-content: space-between;
    margin: 1% 3%;

    @media(max-width : 800px) {
        flex-direction: column;
    }

`

export const Input = styled.input`


    background-color: transparent;
    border-color: ${props => props.theme.colors.contrast};
    color:${props => props.theme.colors.contrast} ;
    font-size: 1.5em;
    padding-left: 1%;
    border-top: transparent ;
    border-right: transparent ;
    border-left: transparent ;

    width:min-content;

    ::placeholder,
    ::-webkit-input-placeholder {
        color:${props => props.theme.colors.contrast} ;
        
    }

    &:focus {
        outline: none;
    }

    @media(max-width : 800px) {
       margin:2em 0;
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



