import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.theme.colors.background};

    z-index: 200;

    display: flex;
    justify-content: center;
    align-items: center;

`
export const NavContent = styled.div`
    width: 70%;
    height: 100%;
    max-width: 1000px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`
export const NavLeft = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    
`
export const NavRight = styled.div`
    height: 100%;
    width: 400px;
    text-decoration: none;
    color: #000;

    display: flex;
    justify-content: space-around;
    align-items: center;

    a{
        font-size: 16px;
        text-decoration: none;
        color: #000;
        

        :hover{
            color:  ${props => props.theme.colors.primary};
        }
        
        @media (max-width: 768px) {
            display: none;
        }
    }

`