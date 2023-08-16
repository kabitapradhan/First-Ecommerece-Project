import React from 'react'
import { Container } from './Container.styled'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import { FooterStyled } from './Header.styled'
import { GlobalStyle } from './Global'
import Footer from './Footer'
function StyledComponent() {
    const theme = {
        colors : {
            header : '#ebfbff',
            body : '#e0dcdc',
            footer : '#003333',
        } ,
        headers : {
            color : "#3c1d1d"
        } ,
        tablet : '1007px',
        mobile : '768px'
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header />
            <Container>
                <h2>This is styled component</h2>
            </Container>
            <Footer />
        </ThemeProvider>

    )
}

export default StyledComponent