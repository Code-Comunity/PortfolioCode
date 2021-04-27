import { Container} from '../styles/pages/HomeStyled'
import { Content } from '../styles/pages/LinkTrabalhosStyled'

import Nav from '../components/NavComp'
import Image from 'next/image'

import Img1 from '../assets/teste.png' 

const InfoTrabalho: React.FC = () => {
    return(
        <>
            <Nav />
            <Container>
                <Content>
                    <h1>Justificativa</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                    <h1>Descrição do Projeto</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

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
            </Container>
        </>
    )
}

export default InfoTrabalho
