import  styled  from "styled-components";
import createGlobalStyle from "styled-components";
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto+Condensed:wght@300&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
        // font-family: 'Roboto Condensed', sans-serif;
    }
`
export const HeaderStyled = styled.header`
    background-color : ${({ theme })=> theme.colors.header } ;
    padding : 10px 0px;
    box-shadow: 2px 2px 5px #ccc;
`
export const Logo = styled.img`
    width : 180px;
`
export const Container = styled.div`
    width: 1180px;
    margin: 0 auto;
`
export const Hedaer1 = styled.h1`
    font-size: 38px;
    line-height: 53px;
    color : ${({color})=> color || '#FFF' } ;
`
export const Hedaer2 = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color : ${({color})=> color || '#FFF' } ;
`
export const Hedaer3 = styled.h3`
    font-size: 22px;
    font-weight: 600;
    color : ${(props)=> props.color || '#FFF' } ;
`
export const Paragraph = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color : ${({color})=> color || '#FFF' } ;
`
export const BloodButton = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 20px;
    background-color: ${(props)=> props.bg || '#b91816' };
    color: ${({ color }) => color || '#FFF'};
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
` 
export const Image = styled.img`
    max-width : 100%;
`