/* import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/productActions';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <Cart
                    cartItems={this.props.cartItems}
                    addToCart = {this.props.addToCart}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
  });
  
  const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(addToCart(product)),
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer)
 */