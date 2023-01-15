import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    background-color:${props => props.theme.colors.card_background} ;
    margin-top:2% ;
    margin-bottom:4% ;
    border: 3px solid red;
    border-radius: 7px;
    width: 15em;
    height: 16.5em;
    padding: 1%;
    font-family: 'Kumbh Sans', sans-serif;
    box-shadow: 10px 8px 13px rgb(0, 0, 0);
    position: relative;

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

    display: flex;
    margin:0 3%;
    


`



