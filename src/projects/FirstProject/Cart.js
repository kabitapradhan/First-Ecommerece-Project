import React from 'react'
import Title from './Title'
import { ProductConsumer } from './ProductProvider'
import { styled } from 'styled-components'
import { Flex } from './Global.styled'
import { Button } from './Global.styled'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <section>
      <ProductConsumer>
        {
          val => {
            console.log(val)
            const {carts} = val; 
            const {clearCart} = val;
            //console.log(carts)
            if(carts.length > 0){
              return (
                <>
                  <Title name="Your cart is currently" title="Not Empty" ></Title>
                  <CartColumn></CartColumn>
                  <CartList val={val}></CartList>
                  <CartTotal val={val} />
                  
                </>
              )
            } else {
              return <Title name="Your cart is currently" title="Empty" ></Title>;
            }

        }}
      </ProductConsumer>
        
        
      </section>
     

    </>
  )
}
export default Cart

function CartTotal ({val}){
  const {cartSubTotal , cartTax , cartTotal,clearCart} = val
  return (
    <>
      <div className="container">
        <div className="col-10 mx-auto ml-sm-5 ml-md-auto col-sm-8 text-capitalize" style={{textAlign : "right"}}>
          <Link to="/">
            <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
             onClick={()=> clearCart() }
            >
              Clear Cart
            </button>
          </Link>
          <h5>
            <span className="text-title"> subtotal :</span>{" "}
            <strong>$ {cartSubTotal} </strong>
          </h5>
          <h5>
            <span className="text-title"> tax :</span>{" "}
            <strong>$ {cartTax} </strong>
          </h5>
          <h5>
            <span className="text-title"> total :</span>{" "}
            <strong>$ {cartTotal} </strong>
          </h5>
        </div>
      </div>
    </>

  )
}


function CartColumn (){
  return (
    <>
      <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase" style={{fontWeight : "bold"}}>products</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase" style={{fontWeight : "bold"}}>name of products</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase " style={{fontWeight : "bold"}} >price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase " style={{fontWeight : "bold"}} >quantity</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase " style={{fontWeight : "bold"}} >remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase " style={{fontWeight : "blod"}}>total</p>
            </div>
          
          </div>

      </div>
    </>
  )
}
function EmptyCart (){
  return(
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>Your cart currently Empty</h1>
          </div>
        </div>
      </div>
    </>
  )
}
function CartList ({val}){
  // strep -1 const {value} = props
  // step 2
  console.log(val);
  const {carts} = val;

  return (
    <>
      {
        carts.map( item => {
          return  <CartItem key={item.id} item={item} val={val} />;
        })
      }
    </>
  )
}
function CartItem({item , val}){
  const {id ,title, img , price ,total ,count } = item;
  const {increment , decrement,removeItem} = val;
  
  return(

    <>
        <div className="row my-1 textcapitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{width : '5rem' , height: '5rem' }} className='img-fluid'  />
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product :  </span> {title}
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <h6>price : ${price}</h6>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <div className="d-flex justify-content-center">
              <div>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => { decrement(id); }}
                >
                  -
                </span>
                <span className="btn btn-black mx-1" >{count}</span>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => { increment(id); }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <Button style={{padding : "5px"}}
              onClick={()=> removeItem(id) }
            >
              <img style={{width : "30px"}} src="https://cdn-icons-png.flaticon.com/128/3221/3221803.png" alt="" />
            </Button>
            
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong>item total : {total}</strong>
          </div>
        </div>
    </>
  )
}
