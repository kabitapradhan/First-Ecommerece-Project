import React from 'react'
import  './style.css'
import Navbar from './Navbar'
import {Route, Routes } from 'react-router-dom'
import Cart from './Cart';
import Product from './Product';
import ProductList from './ProductList';
import Default from './Default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.styled';
import ProductProvider from './ProductProvider';
import Details from './Details';
import Modal from './Modal';

function FirstProject() {
  const theme = {
    colors : {
      header : '#2a2a72',
      footer : '#ececef',
      body : '#0b0a17'
    },
    tablet : '1008px',
    mobile : '768px'
  }
  return (
    <ProductProvider>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route  element={<Default/>}></Route>
        </Routes>
        <Modal />
        

    </ThemeProvider>
    </ProductProvider>
  )
}

export default FirstProject