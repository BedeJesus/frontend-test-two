import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme.colors.primary_background};

    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.contrast};
        border-radius: 10px;
    }   
}

`

