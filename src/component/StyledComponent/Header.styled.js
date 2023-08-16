import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    background-color: ${(props)=> props.theme.colors.header} ;
    color: ${({color})=> color };
    padding : 30px 30px;
    h2{
        font-weight: 800;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom 40px;
    @media(max-width: 768px){
        flex-direction : column;
    }
`
export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};

    &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    }
`
export const Imagex = styled.img`
    width : 350px;
    margin-left : 40px;
`
export const Logo = styled.img`


`

export const FooterStyled = styled.footer`
    background-color: ${({theme})=> theme.colors.footer} ;
    color : white;
    div {
        width: 1180px;
        margin: 0 auto;
        padding: 30px 0px;
    }
`
