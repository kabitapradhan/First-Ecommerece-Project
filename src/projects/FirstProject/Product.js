import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { ProductConsumer } from './ProductProvider';
function Product({product}) {
  //console.log(product)
  const {id , title , img , price , inCart} = product;
  return (
    <>
      <Productwrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className="card">
          <ProductConsumer>
            { val => (
            <div className="img-container p-5" 
              onClick={()=>
                val.handleDetails(id)
              }
            >
              <Link to="/details" >
                    <img src={img} className='card-img-top product-image'></img>
              </Link>
              <button className='cart-btn' disabled={inCart ? true : false} 
                onClick={()=> {
                  val.addToCart(id) ;
                  val.openModal(id);
                }}
              >
                { inCart ? 
                  (<p className='text-capitalize mb-0' disabled>in cart</p>) 
                  : 
                  ( <img style={{width : "20px"}} src='https://cdn-icons-png.flaticon.com/512/34/34627.png'></img> )
                }
              </button>
            </div>
            ) }
            </ProductConsumer>
            {/* card footer */}
            <div className="card-footer d-flex justify-content-between">
              <p className='align-self-center mb-0'>{title}</p>
              <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
            </div>
        </div>
      </Productwrapper>
        
    </>
  )
}

export default Product;

// Product.propTypes = {
//   product : PropTypes.shape({
//     id : PropTypes.number,
//     img : PropTypes.string,
//     title : PropTypes.string,
//     price : PropTypes.number,
//     inCart : PropTypes.bool,
    
//   }).isRequired
// }

const Productwrapper = styled.div`
  .card {
    border-color : transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top : transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;