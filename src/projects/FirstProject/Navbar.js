
import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Button, Container, Flex, Nav , Logo } from './Global.styled';

function Navbar() {
  return (
    <>
      <Nav>
        <Container>
          <Flex style={{justifyContent : "space-between"}}>
           
            <Link to="/">
              <h2>MyLogoxdt</h2>
            </Link>
            <div>
              <Link to="/cart">
                <Button bg='#817d7d' color='#FFF' >
                  <img style={{ width: "25px" }} src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1166717.jpg" alt="" />
                  My Cart
                </Button>

              </Link>
            </div>
          </Flex>

        </Container>
      </Nav>

      
    </>
  )
}
export default Navbar;
export const ButtonContainer = styled.button`
  text-transform : capitalize;

`
