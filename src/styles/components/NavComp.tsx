import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import Logo from '../../assets/Logo.png'

import { NavContainer, NavContent, NavLeft, NavRight } from './NavStyled'

const Nav: React.FC = () => {
    return(
        <>
            <NavContainer>
                <NavContent>
                    <NavLeft>
                        <Image
                            src={Logo}
                            alt="Picture of the author"
                            width={35}
                            height={35}
                        />
                    </NavLeft>
                    <NavRight>
                        <Link href="/Home" >Início</Link>
                        <Link href="/" >Habilidades</Link>
                        <Link href="/" >Trabalhos</Link>
                        <Link href="/" >Sobre</Link>
                    </NavRight>
                </NavContent>
            </NavContainer>
        </>
    )
}

export default Nav
