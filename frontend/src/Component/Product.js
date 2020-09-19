import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.p`
color: green;
font-size: 16px;
// text-Shadow-Color :red;
  font-Weight: bold;
 `;
const Paragraph_h2= styled.p`
font-size: 12px;
font-Weight: bold;
color: red;
text-Decoration-Line: line-through;

`; 

 
const Product = ({ price, quantity, title }) => (
  <div>
    {title} 
     <Paragraph><p> Discounted Price SEK: {price} </p></Paragraph> 
     <Paragraph_h2>Original Price SEK: {price*.5+price}</Paragraph_h2>   
       
     <p>{quantity ? ` Quantity ${quantity}` : null} </p>
 

    
  </div>
)

export default Product
