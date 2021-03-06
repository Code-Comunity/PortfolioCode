import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<{open: boolean}>`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
      text-decoration: none;
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>

        <li>
          <Link href="/Home" >Inicio</Link>
        </li> 
        <li>
          <Link href="/Habilidades" > Habilidades </Link>
        </li> 
      
        <li>
          <Link href="/Trabalhos" > Trabalhos</Link>
        </li> 
     
        <li>
           <Link href="/Sobre"> Sobre </Link>
        </li> 

    </Ul>
  )
}

export default RightNav
