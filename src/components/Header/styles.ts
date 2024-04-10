import styled from 'styled-components'

export const ContainerHeader = styled.header`
    max-width: 116.0rem;
    padding: 3.2rem 2.0rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavBar = styled.nav`
    display: flex;
    gap: 1.2rem;

    div {
        display: flex;
        align-items: center;
        gap: .4rem;

        background-color: ${(props) => props.theme['purple-light']};

        svg{
            color: ${(props) => props.theme.purple};
        }

        span {
            color: ${(props => props.theme['purple-dark'])}
        }

        padding: 1rem .8rem;
        border-radius: .6rem;
    }

    a {
        display: flex;
        align-items: center;

        background-color: ${( props ) => props.theme['yellow-light']};
        color: ${( props ) => props.theme['yellow-dark']};

        padding: .8rem;
        border-radius: .6rem;

        position: relative;

        span {
            font-weight: bold;
            color: ${( props ) => props.theme.white};

            background-color: ${( props ) => props.theme['yellow-dark']};
            border-radius: 50%;

            width: 2.0rem;
            height: 2.0rem;
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
        }

    }

    
`;
