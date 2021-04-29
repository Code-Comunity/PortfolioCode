import styled from 'styled-components'

export const Container = styled.div`
    width: 150px;
    height: 35px;
    margin: 15px;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;

    background-color: ${props => props.theme.colors.primary}; 

    display: flex;
    justify-content: center;
    align-items: center;
`