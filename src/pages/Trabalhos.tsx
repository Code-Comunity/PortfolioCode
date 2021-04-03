import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Nav from '../components/NavComp'

import { Container } from '../styles/pages/HomeStyled'
import { Content, Service, ServiceHover } from '../styles/pages/TrabalhosStyled'

import ImgRight1 from '../assets/1.png'
import ImgLeft1 from '../assets/2.png'

const Trabalhos: React.FC = () => {
    return(
        <>   
            <Head>
                <title>Trabalhos</title>
            </Head>
            <Nav />

            <Container>
                <Content>
                    <h1>Abaixo você pode conferir nossos últimos trabalhos: </h1>
                    <Service>
                         <p>Logo</p>
                        <ServiceHover>
                            <h1>Logo</h1>
                            <h1>Logo</h1>
                        </ServiceHover>     
                    </Service>
                </Content>
            </Container>
        </>
    )
}

export default Trabalhos