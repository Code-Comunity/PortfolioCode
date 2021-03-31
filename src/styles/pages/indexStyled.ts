import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 35px;
        color: #000;
        margin-top: 40px;
    }

    p{
        margin-top: 24px;
        font-size: 25px;
        line-height: 32px;
        text-align: center;
    }

    span{
        font-size: 25px;
        line-height: 32px;
        text-align: center;
        color: ${props => props.theme.colors.primary};
    }
`