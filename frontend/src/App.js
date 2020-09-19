import React from 'react';
import './App.css'; 
import ProductsContainer from './Component/ProductsContainer'
import CartContainer from '../src/Component/CartContainer'
import styled from 'styled-components';
import ParticlesContainer from './Component/ParticlesContainer'

const Paragraph_pooja1 = styled.p`
  font-size: 40px;
  text-align: center;
  //font-text: red;
 font-style: Calibri;
 color: white;
 //fontStyle: enum('italic');
background-color: black;
`;
 
const Paragraph_pooja2= styled.p`
  font-size: 40px;
  text-align: center;
  //font-text: red;
 font-style: Calibri;
 color: darkred;
 //fontStyle: enum('italic');
 
 background-color: black;
`; 

const App = () => (
  <div>
   <Paragraph_pooja1><h1>BLACK FRIDAY </h1></Paragraph_pooja1>
      <ParticlesContainer>
      </ParticlesContainer>
     <Paragraph_pooja2><h2> SALE </h2></Paragraph_pooja2>
    <hr/>
       <ProductsContainer />
    <hr/>
    <CartContainer />
    
 </div>
)
 
 export default App;
