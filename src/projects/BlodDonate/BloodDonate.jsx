import React from 'react'

import { BloodButton } from './styled/GlobalStyle.styled'
import Header from './Header'
import { ThemeProvider } from 'styled-components'

function BloodDonate() {
    const theme = {
        colors : {
            header : "#FFF",
            body : "#FFF",
            footer : "#b9181"
        }
    }
    return (
        <ThemeProvider theme={theme}>
             <Header />
            <h1>Bllod Donate</h1>
            <BloodButton bg='#f01414' color='#FFF' >This is Kabita Pradhan</BloodButton>
        </ThemeProvider>
      
    )
}

export default BloodDonate