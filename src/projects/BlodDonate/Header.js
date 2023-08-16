import React from 'react'
import { BloodButton, Container, Flex, HeaderStyled, Logo } from './styled/GlobalStyle.styled'

function Header() {
  return (
    <>
        <HeaderStyled>
            <Container>
                <nav>
                    <Flex style={{justifyContent: "space-between"}}>
                        <Logo src='	https://www.ublood.com/assets/images/logo/logo-h.png' />
                        <Flex>
                            <BloodButton bg='#FFF' color='#b91816' >Login</BloodButton>
                            <BloodButton style={{marginLeft : "15px"}}>Register</BloodButton>
                        </Flex>
                        
                    </Flex>
                </nav>
            </Container>
            
        </HeaderStyled> 
    </>
  )
}

export default Header