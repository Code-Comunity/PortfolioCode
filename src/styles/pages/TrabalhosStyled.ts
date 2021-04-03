import styled from 'styled-components'


export const Content = styled.div`
    width: 70%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h1{
        font-size: 20px;
        text-align: center;
        margin-bottom: 35px;
    }
`

export const ServiceHover = styled.div`
    width: 100%;
    height: 250px;
    background: rgba(1, 1, 1, 0.78);

    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Service = styled.div`
    width: 100%;
    height: 250px;
    background-color: #F3F2F2;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        p{
            display: none;
        }
    }

    &:hover ${ServiceHover}{
        display: flex;
    }
    
    

`