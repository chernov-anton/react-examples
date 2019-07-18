import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  getRows = () => {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (!product.name.includes(this.props.searchText)) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}/>
      );
      lastCategory = product.category;
    });

    return rows
  };

  render() {
    const rows = this.getRows();

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  onChange = (e) => {
    this.props.handleSearchTextChange(e.target.value)
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.text}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  state = {
    searchText: ''
  };

  handleSearchTextChange = (searchText) => {
    this.setState({
      searchText
    });
  };

  render() {
    return (
      <div className="m-5">
        <SearchBar searchText={this.state.searchText} handleSearchTextChange={this.handleSearchTextChange}/>
        <ProductTable searchText={this.state.searchText} products={this.props.products}/>
      </div>
    );
  }
}


const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$199.99',
    name: 'Nexus 7'
  }
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);

