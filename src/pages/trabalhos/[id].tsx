import { Container} from '../../styles/pages/HomeStyled'
import { Content } from '../../styles/pages/LinkTrabalhosStyled'
import { GetStaticPaths, GetStaticProps } from 'next'

import Nav from '../../components/NavComp'
import Image from 'next/image'

import Img1 from '../../assets/teste.png' 


export const getStaticPaths: GetStaticPaths  = async () => {
    const response = await fetch(`https://portfolio-codecommunity.herokuapp.com/api/allposts`)
    const data = await response.json()

    const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

    return { paths, fallback: true }
}


export const getStaticProps: GetStaticProps = async (context) => {

    const id:any = context.params.id
    const response = await fetch(`https://portfolio-codecommunity.herokuapp.com/api/allposts/${id}`)
    const data = await response.json();
    
    console.log(data)
  
    return {
      props: {
        post: data,
      },
      revalidate: 30,
    }
}


 
const InfoTrabalho: React.FC<{post:any}>  = ({ post }) => {
    return(
        <>
            <Nav />
            <Container>
            {post.map((e:any): JSX.Element => (
                <Content>
                    <h1>Justificativa</h1>
                    <p>{e.description}</p>

                    <h1>Descrição do Projeto</h1>
                    <p>{e.justification}</p>

                    <h1>Protótipo/Prints</h1>

                    <span>
                        <Image
                            src={Img1}
                            alt="Picture of the author"
                            width={1129}
                            height={874}                        
                        />
                    </span>

                    <span>
                        <Image
                            src={Img1}
                            alt="Picture of the author"
                            width={1129}
                            height={874}                        
                        />
                    </span>

                    <span>
                        <Image
                            src={Img1}
                            alt="Picture of the author"
                            width={1129}
                            height={874}                        
                        />
                    </span>
                    
                </Content>
                ))}
            </Container>
        </>
    )
}

export default InfoTrabalho
