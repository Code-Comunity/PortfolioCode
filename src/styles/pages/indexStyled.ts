import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const Content = styled.div`
    width: 75%;
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
        width: 500px;

        @media (max-width: 425px){
            width: 300px;
            font-size: 18px;
        }
    }

    span{
        font-size: 25px;
        line-height: 32px;
        text-align: center;
        color: ${props => props.theme.colors.primary};

        @media (max-width: 425px){
            font-size: 18px;
        }
    }

    @media (max-width: 320px){
        height: 95%;
    }
`