import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Nav from '../components/NavComp'

import { Container } from '../styles/pages/HomeStyled'
import { Content, ContentSides } from '../styles/pages/HabilidadesStyled'

import ImgRight1 from '../assets/1.png'
import ImgLeft1 from '../assets/2.png'

const Habilidades: React.FC = () => {
    return(
        <>   
            <Head>
                <title>Habilidades</title>
            </Head>
            <Nav />

           <Container>
               <Content>
                    <ContentSides>
                        <h1>Ux/Ui Design</h1>
                        <p> 
                            Como já dito na nossa apresentação, somos adeptos do Ux/Ui que consiste em desenvolver designs e layouts focados em proporcionar a melhor experiencia possível ao usuário quando o mesmo utilizar o produto em questão.
                        </p>     
                        <p>
                            Segue abaixo uma pequena definição para que fique mais simples o entendimento de Ux/Ui:
                        </p>
                        <p>
                            <span>Ui:</span> Um bom projeto de UI antecipa as necessidades do usuário e garante que a interface contenha elementos de fácil acesso e utilização, fornecendo o que é chamado de experiência user-friendly, ou seja, uma experiência que é amigável e que não cause frustrações ao utilizador.
                        </p>
                        <p>
                            <span>Ux:</span> É uma área cujo objetivo é garantir que o usuário tenha a melhor experiência de uso com relação a algum produto ou serviço
                        </p>
                    </ContentSides>
                    <ContentSides>
                        <Image
                            src={ImgRight1}
                            alt="Picture of the author"
                            width={452}
                            height={677}
                        />
                    </ContentSides>

                    <ContentSides>
                        <Image
                            src={ImgLeft1}
                            alt="Picture of the author"
                            width={452}
                            height={677}
                        />
                    </ContentSides>
                    <ContentSides>
                        <h1>Desenvolvimento Web</h1>
                        <p> 
                            Como já dito na nossa apresentação, somos adeptos do Ux/Ui que consiste em desenvolver designs e layouts focados em proporcionar a melhor experiencia possível ao usuário quando o mesmo utilizar o produto em questão.
                        </p>     
                        <p>
                            Segue abaixo uma pequena definição para que fique mais simples o entendimento de Ux/Ui:
                        </p>
                        <p>
                            <span>Ui:</span> Um bom projeto de UI antecipa as necessidades do usuário e garante que a interface contenha elementos de fácil acesso e utilização, fornecendo o que é chamado de experiência user-friendly, ou seja, uma experiência que é amigável e que não cause frustrações ao utilizador.
                        </p>
                        <p>
                            <span>Ux:</span> É uma área cujo objetivo é garantir que o usuário tenha a melhor experiência de uso com relação a algum produto ou serviço
                        </p>
                    </ContentSides>
               </Content>
            </Container>
        </>
    )
}

export default Habilidades