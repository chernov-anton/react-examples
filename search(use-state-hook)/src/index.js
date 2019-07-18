import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const ProductCategoryRow = (props) => {
  const category = props.category
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

const ProductRow = (props) => {
  const product = props.product

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const getRows = (products, searchText) => {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (!product.name.includes(searchText)) {
      return
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}/>
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}/>
    )
    lastCategory = product.category
  })

  return rows
}

const ProductTable = (props) => {
  const rows = getRows(props.products, props.searchText)

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
  )

}

const SearchBar = (props) => {
  const onChange = (e) =>
    props.handleSearchTextChange(e.target.value)


  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.text}
        onChange={onChange}
      />
    </form>
  )
}

const FilterableProductTable = (props) => {
  const [searchText, handleSearchTextChange] = useState('')

  return (
    <div className="m-5">
      <SearchBar searchText={searchText} handleSearchTextChange={handleSearchTextChange}/>
      <ProductTable searchText={searchText} products={props.products}/>
    </div>
  )
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
]

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
)

