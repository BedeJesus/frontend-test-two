import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    background-color:black ;
    margin-top:2% ;
    margin-bottom:4% ;
    border: 3px solid red;
    border-radius: 7px;
    width: 15em;
    height: 16em;
    padding: 1%;
    font-family: 'Kumbh Sans', sans-serif;
    box-shadow: 10px 8px 13px rgb(0, 0, 0);
    position: relative;

 p{
    margin-bottom: 5%;
    color:white;
}

span{
    color: yellow;
    margin-left:3%;
}


`


export const Name = styled.h3`

    color: Yellow;
    font-weight: bold;
    font-size: 1.5em;
    padding-bottom: 10%;
    text-align: center;
`

export const Description = styled.p`

    display: flex;
    margin:0 3%;


`



