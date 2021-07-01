import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }
    html{
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
        width: 3px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f100; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #a1b5ad78; 
        border-radius: 16px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`