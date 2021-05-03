import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/NavComp'

import { Container } from '../styles/pages/HomeStyled'
import { Content, Service, ServiceHover } from '../styles/pages/TrabalhosStyled'

import Button from '../components/buttonComp'
import { GetStaticProps } from 'next'



export const getStaticProps:GetStaticProps = async () => {

    const response = await fetch('https://portfolio-codecommunity.herokuapp.com/api/allPosts')
    const data = await response.json();
    console.log(data)
  
    return {
      props: {
        post: data,
      },
      revalidate: 30,
    }
}


const Trabalhos: React.FC<{post:any}> = ({ post }) => {
    return(
        <>   
            <Head>
                <title>Trabalhos</title>
            </Head>
            
            <Nav />

            <Container>
                <Content>
                    <h1>Abaixo você pode conferir nossos últimos trabalhos: </h1>
                    {post.map((e:any): JSX.Element => (
                        <Link href="/trabalhos/[id]" as={`/trabalhos/${e._id}`} >
                            <Service key={e.id} >
                                <Image
                                    src={e.logoProject}
                                    alt={e.nameProject}
                                    width={88}
                                    height={88}
                                />
                                <ServiceHover>
                                        <Button  />
                                </ServiceHover>     
                            </Service>
                        </Link>     
                    ))}  
                </Content>
            </Container>
        </>
    )
}

export default Trabalhos