import styled from 'styled-components'

export const Container = styled.div`
    width: 20%;
    height: 15%;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;

    background-color: ${props => props.theme.colors.primary}; 

    display: flex;
    justify-content: center;
    align-items: center;
`