import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color:${props => props.theme.colors.card_background} ;
    margin-top:1% ;
    margin-bottom:2% ;
    border: 3px solid red;
    border-radius: 7px;
    width: 17em;
    height: 18em;
    padding: 1%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 10px 8px 13px rgb(0, 0, 0);

    p{
        margin-bottom: 5%;
        color:${props => props.theme.colors.text};;
    }

    span{
        color: ${props => props.theme.colors.contrast};
        font-weight: 700;
        margin-left:3%;
    }


`

export const Name = styled.h3`

    color: ${props => props.theme.colors.contrast};
    font-weight: bold;
    font-size: 1.5em;
    font-family: 'Star Jedi';
    padding-bottom: 10%;
    text-align: center;
`

export const Description = styled.p`

    margin:0 3%;
    
`



