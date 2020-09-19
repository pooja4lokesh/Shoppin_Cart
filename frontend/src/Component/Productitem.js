import React from 'react'
import Product from './Product'
import {Prod} from './CSS/Productitem.css'
import defaultImg from './Images/key_board.JPG'
import keyboardImg from './Images/key_board.JPG'
import mouseImg from './Images/mouse.JPG'
import usbImg from './Images/USB.JPG'
import styled from 'styled-components';

const StyleButton = styled.button`
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover{
  background-color:lightgreen;
  color:black;
 `;

  const ProductItem = ({ product, onAddToCartClicked }) => (
  
  <article className="Prod">
    <div className="defaultImg">
  {product.title==='SV 8GB USB Flash Memory E100' ? <img src={usbImg}/> : product.title==='Litware Wireless Mouse M35' ? <img src={mouseImg}/> : product.title==='SV Keyboard E90' ? <img src={keyboardImg}/> : <img src={defaultImg}/>}
     <Product
        title={product.title}
        price={product.price}
        quantity={product.inventory} />
      <StyleButton
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Out of Stock'}
     </StyleButton>
    </div>
  </article>
  )

export default ProductItem