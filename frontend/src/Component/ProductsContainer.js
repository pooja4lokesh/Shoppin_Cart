import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../Component/Productitem'
import ProductsList from '../Component/ProductsList'


const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title="Products">
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)} />
      )}
    </ProductsList>
  )

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
  })
  
  export default connect(
    mapStateToProps,
    { addToCart }
  )(ProductsContainer)
  