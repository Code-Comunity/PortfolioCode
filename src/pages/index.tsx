import React, {  useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Logo from '../assets/Logo.svg'
import { Container } from '../styles/pages/indexStyled'

const Index: React.FC = () => {

  const Router = useRouter()
  const [ count, setCount ] = useState(10)

  //Contagem regressiva + redireecionamento
  const Regressive = setInterval(
    function Counter(){
      setCount(count - 1)
      clearInterval(Regressive)
    }
  , 1000)

  if(count === 1){
    Router.push("/Home") 
  }



  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Logo />
        <h1>CodeComunity</h1>
        <p style={{ width: "500px" }}>Olá, somos a CodeCommunity,
          que tal conhecer nossos trabalhos 
          e nossas habilidades ?</p>
        <p style={{ marginTop: "100px" }}>Redirecionando para a nossa página em <span>{count} segundos...</span></p>  
    </Container>
  )
}

export default Index
