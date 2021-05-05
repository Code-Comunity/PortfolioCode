import styled from 'styled-components'

export const Content = styled.div`
    width: 70%;
    max-width: 1000px;
    min-height: 100vh; 

    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

`

export const ContentBot = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 1000px;
    margin-top: 50px;

    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    } 
`


export const ContentSides = styled.div`
    width: 452px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    h1{
        font-size: 20px;
        margin-bottom: 10px;
    }

    p{
        font-size: 15px;
        margin: 10px;
    }

    span{
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        width: 85%;
    } 

`

