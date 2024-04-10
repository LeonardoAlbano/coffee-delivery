import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :root{
        
        font-size: 62.5%;
        font-family: "Jost", sans-serif;
    }

    //Ao cliclar em algum elemento:
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-light']};
    }


    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
		-webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;

    }
`
