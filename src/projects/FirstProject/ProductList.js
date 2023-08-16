import React from 'react'
import Title from './Title';

import { ProductConsumer } from './ProductProvider';
import Product from './Product';

function ProductList() {

  return (
    <>
      <div>
        <div className="container">
          <Title name="our" title="products" ></Title>
          <div className="row">
             <ProductConsumer>
                { val => {
                    //console.log(val)
                    return val.products.map((product)=>{
                      return <Product key={product.id} product={product} />
                    })
                }}
             </ProductConsumer>
          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default ProductList