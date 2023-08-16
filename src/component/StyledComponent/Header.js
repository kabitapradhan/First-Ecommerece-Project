import React from 'react'
import { Button, HeaderStyled, Imagex, Logo, Nav } from './Header.styled'
import { Container } from './Container.styled'
import { Flex } from './Global'

function Header() {
  return (
    <>
        <HeaderStyled bg='#c3c2c2' color="#434242">
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' ></Logo>
                    <Button>Try It Free</Button>
                </Nav>
                <Flex style={{marginTop : "60px"}}>
                    <div>
                        <h1>Bigger Headings You want This</h1>
                        <p>
                            Search engines use the headings to index the structure and content of your web pages.
                            Users often skim a page by its headings. It is important to use headings to show the 
                            document structure.
                            Search engines use the headings to index the structure and content of your web pages.
                            Users often skim a page by its headings. It is important to use headings to show the 
                            document structure.
                        </p>
                        <Button bg='#ff0099' color='#fff' >This is</Button>
                    </div>
                    <Imagex src='./images/illustration-flowing-conversation.svg' />                </Flex>
            </Container>
        </HeaderStyled>
    </>
  )
}

export default Header