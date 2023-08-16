import React, { createContext, useEffect, useState } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();
//Provider (provide data to all page using context api)
// consumer

function ProductProvider({ children }) {
    const [products ,setProduct] = useState([]);
    const [detailsProduct ,setDetailsProduct] = useState(detailProduct);
    const [carts , setCarts] = useState([]);
    const [modalOpen , setModalOpen] = useState(false);
    const [modalProduct , setModalProduct] = useState(detailsProduct);
    const [cartSubTotal , setCartSubTotal] = useState(0);
    const [cartTax , setCartTax] = useState(0);
    const [cartTotal , setCartTotal] = useState(0);
    useEffect(()=> {
        setProducts();
    } , [])
    useEffect(()=> {
        addTotals();
    } , [carts])
    const setProducts = () =>{
        let tmpProducts  = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tmpProducts = [...tmpProducts , singleItem];
        });
        setProduct(tmpProducts);
    }
    const getItem = (id) =>{
        const product = products.find(item =>item.id === id)
        return product;
    }
    const handleDetails = (id) =>{
        const product = getItem(id);
        setDetailsProduct(product)
    }
    const addToCart = (id) =>{
        let tmpProduct = [...products];
        // get the product;
        const index = tmpProduct.lastIndexOf(getItem(id));
        const product = tmpProduct[index];
        product.inCart = true;
        product.count = ( product.count + 1 );
        product.total = ( product.price * product.count );

        setProduct(tmpProduct);
       
        setCarts([...carts , product]);
        //const price = product.price ;
       
        // console.log("+++++++++++++++++++++++++++++++");
        // console.log(carts)
    }
    const openModal = (id) =>{
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true)
    }
    const closeModal = ()=>{
        setModalOpen(false);
        setModalProduct({});
    }
    const increment = (id) => {

        let tmpCarts = [...carts];
        // get the product;
        const index = tmpCarts.lastIndexOf(getItem(id));
        if(index > -1){
            const product = tmpCarts[index];
            product.count = ( product.count + 1 );
            product.total = ( product.price * product.count );
            setCarts(tmpCarts);
        }
        
       
    }
    const decrement = (id) =>{
        let tmpCarts = [...carts];
        // get the product;
        const index = tmpCarts.lastIndexOf(getItem(id));
        if(index > -1 ){
            const product = tmpCarts[index];
            if(product.count > 0 ){
                product.count = ( product.count - 1 );
                product.total = ( product.price * product.count );
                setCarts(tmpCarts);
            }
        }
        
    }
    const removeItem = (id)=>{
        let tmpProducts = [...products];
        let tmpCarts = [...carts];

        tmpCarts = carts.filter(cart => cart.id !== id);
        const index = tmpProducts.lastIndexOf(getItem(id));
        const removeProduct = tmpProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;
        setProduct([...tmpProducts ])
        setCarts([...tmpCarts]);
    }
    const clearCart = () =>{
        setCarts([]);
    }
    const addTotals = ()=> {
        let subTotal = 0;
        carts.map( item => {subTotal +=  item.total ; console.log(subTotal)});
        const tax = parseFloat((subTotal * 0.1).toFixed(2));
        const total = subTotal + tax;
        console.log("addTotal" , subTotal , tax , total)
        setCartTax(tax)
        setCartSubTotal(subTotal);
        setCartTotal(total);
    }
    return (
        <>
            <ProductContext.Provider 
            value={{ products, detailsProduct, 
                handleDetails, addToCart, 
                carts , openModal , closeModal ,
                modalOpen , modalProduct ,
                cartSubTotal , cartTax , cartTotal,
                increment , decrement , removeItem , clearCart
            }}
            >
                
                {children}
            </ProductContext.Provider>
        </>
    )
}
export default ProductProvider

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };