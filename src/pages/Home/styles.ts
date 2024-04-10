import styled from "styled-components";

export const Hero = styled.section`
    position: relative;
    

    img#hero-bg{
        position: absolute;
        top: 0;
        left: 0;
        max-height: 54.4rem;
        width: 100vw;
        object-fit: cover;

    }
`;

export const HeroContent = styled.div`
    max-width: 116.0rem;
    padding: 9.2rem 2.0rem;
    margin: 0 auto;

    display: flex;
    gap: 5.6rem;
    align-items: flex-start;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        gap: 6.6rem;
    }
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    > h1{
        font-size: 5.0rem;
        font-weight: 900;
        color: ${( props ) => props.theme["base-title"]};
    }

    > span{
        font-size: 2.0rem;
        font-weight: 500;
        color: ${( props ) => props.theme["base-subtitle"]};
    }

`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.0rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        svg{
            padding: .8rem;
            border-radius: 99.9rem;
            color: ${( props ) => props.theme.white};
        }
    }

    > div:nth-child(1) svg {
        background-color: ${( props ) => props.theme["yellow-dark"]};
    }

    > div:nth-child(2) svg {
        background-color: ${( props ) => props.theme["base-title"]};
    }

    > div:nth-child(3) svg {
        background-color: ${( props ) => props.theme["yellow"]};
    }

    > div:nth-child(4) svg {
        background-color: ${( props ) => props.theme.purple};
    }

`;

export const CoffeList = styled.section`
    max-width: 116.0rem;
    padding: 3.2rem 2.0rem 15.0rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 5.4rem;

    
`

