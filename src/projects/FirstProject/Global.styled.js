import { styled } from "styled-components";
import createGlobalStyle from "styled-components";
export const GlobalStyle = createGlobalStyle`

`
//background-color: ${(props)=> props.bg || '#817d7d' };
export const Button = styled.button`
    
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 20px;
    background: transparent;
    border-color: ${props =>
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--lightBlue);
    color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`

export const Logo = styled.a`
    color: white;
    
    h2{
        font-weight: 900;
        text-transform: uppercase;
    }
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
`
export const Container = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 30px 0px;
`
export const Nav = styled.nav`
    background: ${({theme})=> theme.colors.header };
`
export const Footer = styled.footer`
    background: ${({theme})=> theme.colors.footer };
`