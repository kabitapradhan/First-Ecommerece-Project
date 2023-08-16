import React from 'react'
import { ProductConsumer } from './ProductProvider'
import { Link } from 'react-router-dom';
import { Button } from './Global.styled';
function Details() {
  return (
    <>
     
      <ProductConsumer>

        {(val)=>{
          console.log(val.detailsProduct )
          const {id , company , img , info , price , title , inCart} = val.detailsProduct;
          return (
            <>
              <div className="container py-5">
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-blue my-5">
                      <h1>{title}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className='img-fluid' />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h2>{title}</h2>
                      <h4>made by {company}</h4>
                      <h4>price : ${price}</h4>
                      <p>Some Info About Product</p>
                      <p>{info}</p>
                      <div>
                        {/* buttons */}
                        <Link to="/">
                          <Button>bcak to products</Button>
                        </Link>
                        <Button 
                          cart={inCart ? "true" : "false"}  
                          disabled={inCart ? true : false}
                          onClick={()=>{
                            val.addToCart(id);
                            val.openModal(id);
                          }}
                        >
                          { inCart ? "incart" : "add to cart"}
                        </Button>
                      </div>
                    </div>
                  </div>
              </div>
            </>
          )
        }}
      </ProductConsumer>
    </>
  )
}

export default Details