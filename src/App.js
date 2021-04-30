import React from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import { fetchProducts, filterProducts, sortProducts } from "./redux/actions/productActions";
import { addToCart, clearCart, removeFromCart } from "./redux/actions/cartActions";
import { createOrder, clearOrder } from "./redux/actions/orderActions";
import { connect } from "react-redux";

class App extends React.Component {

  render() {
    return (
      <div className="grid-container">
        
        <header>
          <a href="/">Online Phone Store</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                sort={this.props.sort}
                products={this.props.products}
                company={this.props.company}
                sortProducts={this.props.sortProducts}
                filterProducts={this.props.filterProducts}
                filteredProducts={this.props.filteredProducts}
              />
              <Products
                addToCart={this.props.addToCart}
                products={this.props.products}
                addProducts={this.props.addProducts}
                filteredProducts={this.props.filteredProducts}
                data={data.products}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.props.cartItems}
                removeFromCart={this.props.removeFromCart}
                createOrder={this.props.createOrder}
                order={this.props.order}
                clearOrder={this.props.clearOrder}
                clearCart={this.props.clearCart}
              />
            </div>
          </div>
        </main>

        <footer>All right is reserved</footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  sort: state.products.sort,
  company: state.products.company,
  cartItems: state.cart.cartItems,
  order: state.order.order,
  
});

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(fetchProducts(data)),
  filterProducts: (value) => dispatch(filterProducts(value)),
  sortProducts: value => dispatch(sortProducts(value)),
  addToCart: product => dispatch(addToCart(product)),
  removeFromCart: id => dispatch(removeFromCart(id)),
  createOrder: data => dispatch(createOrder(data)),
  clearOrder: () => dispatch(clearOrder()),
  clearCart: () => dispatch(clearCart()),

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
