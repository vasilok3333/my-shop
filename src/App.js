import React from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
import { fetchProducts, filterProducts, sortProducts } from "./redux/actions/productActions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      price: "",
      sort: "",
      company: "",
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }


  addToCart(product) {

    let cartItems = this.state.cartItems.slice();
    console.log(cartItems);
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({
      cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  removeFromCart(product) {
    let cartItems = this.state.cartItems.slice();

    this.setState({
      cartItems: cartItems.filter((item) => item.id !== product.id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item.id !== product.id))
    );
  }

  createOrder(order) {
    alert(`Дякуємо за Ваше замовлення. Замовлення для ${order.name} успішно оброблене`);
  }
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
                addToCart={this.addToCart}
                products={this.props.products}
                addProducts={this.props.addProducts}
                filteredProducts={this.props.filteredProducts}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
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
  company: state.products.company


});

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(fetchProducts(data)),
  filterProducts: (value) => dispatch(filterProducts(value)),
  sortProducts: value => dispatch(sortProducts(value))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
