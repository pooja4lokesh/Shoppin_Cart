import React from 'react'
import Product from './Product'
import styled from 'styled-components';
import img from './Images/cart.jpg'

const StyleButton = styled.button`

background-color:grey;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover{
  background-color:Darkgrey;
  color:black;

  `;

   var sectionStyle = {
  
    backgroundImage: "url(" + img + ")"
  };  
 


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        
        
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  
  return (
    <section style={ sectionStyle }>
    <div>
     <h3>Your Cart</h3>
      <div>{nodes}</div> 
      <p>Total: SEK {total}</p>
      <StyleButton onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </StyleButton>
    </div>
    </section>
  )
}



export default Cart
