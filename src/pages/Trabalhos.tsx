import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/NavComp'

import { Container } from '../styles/pages/HomeStyled'
import { Content, Service, ServiceHover } from '../styles/pages/TrabalhosStyled'

import Button from '../components/buttonComp'

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
                            <Link href='/ProvisorioTrabalho' ><Button  /></Link>     
                        </ServiceHover>     
                    </Service>
                </Content>
            </Container>
        </>
    )
}

export default Trabalhos