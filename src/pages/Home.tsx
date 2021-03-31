import React from 'react'
import Image from 'next/image'

import BannerImg from '../assets/banner.png'
import Nav from '../styles/components/NavComp'
import { Container, Content } from '../styles/pages/HomeStyled'

const Home: React.FC = () => {
    return(
        <>   
            <Nav />
            <Container>
            <Content>
                <Image
                    src={BannerImg}
                    alt="Picture of the author"
                    width={1129}
                    height={496}
                />

                <p>Seja bem vindo ao nosso portfólio, como você já sabe somos a CodeComunity, uma equipe de desenvolvimento de sistemas e design Ux/Ui, focada principalmente no desenvolvimento de sites e todo tipo de sistemas!</p>
            </Content>
            </Container>
        </>
    )
}

export default Home