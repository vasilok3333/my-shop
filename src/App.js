import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      price: "",
      sort: "",
      company: "",
    };
    this.sortProducts = this.sortProducts.bind(this);
    this.filterCompanyProducts = this.filterCompanyProducts.bind(this);
  }

  sortProducts(event) {
const sort = event.target.value;

    this.setState( (state) => ({
      sort:sort,
      products: [...this.state.products].sort((a,b) => 
      sort === "lowest" ? 
      (a.price - b.price) : 
      sort === "highest" ? 
      (b.price - a.price) :
      (b.id - a.id )
      ) 
    })
    )
    console.log(event.target.value);
  }

  filterCompanyProducts(event) {
    console.log(event.target.value);
if (event.target.value === "all") {
  this.setState({
    company: event.target.value,
    products: data.products
  })
} else {
    this.setState({
      company: event.target.value,
      products: data.products.filter(
        (product) => product.company.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0
      ),
    });
  }
}

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Viktoriia Online Store</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                sort={this.state.sort}
                company={this.state.company}
                sortProducts={this.sortProducts}
                filterCompanyProducts={this.filterCompanyProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>

        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default App;
