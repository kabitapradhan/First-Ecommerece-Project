import React from 'react'
import { ProductConsumer } from './ProductProvider'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Global.styled';



function Modal({ product }) {
    return (
        <ProductConsumer>
            {
                value => {
                    //console.log(value);
                    const { modalOpen, closeModal } = value;
                    const { id , img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                            id="modal"
                                        >
                                            <h5>item added to cart</h5>
                                            <img src={img} className='img-fluid' alt="" />
                                            <h5 >{title}</h5>
                                            <h5 className='text-muted'>price : $ {price}</h5>
                                            <Link to="/"
                                                onClick={()=> closeModal() }
                                            >
                                                <Button>Back to Products</Button>
                                            </Link>
                                            <Link to="/cart">
                                                <Button onClick={()=> closeModal() } >
                                                    { modalOpen ? "Go to cart" : "Add to Cart" }
                                                </Button>
                                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }
            }
        </ProductConsumer>
    )
}

export default Modal;
const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
z-index: 99;
#modal {
  background: var(--mainWhite);
}
`