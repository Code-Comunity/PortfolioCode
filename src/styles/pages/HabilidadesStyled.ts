import styled from 'styled-components'

export const Content = styled.div`
    width: 70%;

    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap;

`

export const ContentSides = styled.div`
    width: 50%;
    min-width: 452px;
    height: 100%;
    margin-bottom: 30px;

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
`

