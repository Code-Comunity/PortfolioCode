import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    padding-top: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p{
        font-size: 20px;
        margin-top: 50px;
        text-align: center;
    }

    @media (min-width: 768px){
        width: 90%;

    }
`


