let products = [
  {name: 'apple', price: 2.99, stock: 10},
  {name: 'orange', price: 3.99, stock: 5},
  {name: 'banana', price: 1.99, stock: 0},
  {name: 'kiwi', price: 5.99, stock: 6},
  {name: 'grapes', price: 4.99, stock: 0},
  {name: 'mango', price: 3.99, stock: 1},
  {name: 'pear', price: 2.99, stock: 15},
  {name: 'peach', price: 3.99, stock: 22},
  {name: 'plum', price: 4.99, stock: 14},
  {name: 'watermelon', price: 5.99, stock: 10},
  {name: 'cantaloupe', price: 4.99, stock: 0},
  {name: 'honeydew', price: 3.99, stock: 25},
  {name: 'blueberries', price: 2.99, stock: 5},
]

export const CardContaier = () => {
  return (
    // </div>
    <div className="flex items-center justify-between" style={{flexWrap: 'wrap',rowGap: '15px', margin:'50px 0px'}}>
      {products.map((product,idx) => {
        return <Card key={`product-${idx}`} name={product.name} price={product.price} stock={product.stock}></Card>
      })}
    </div>
  ) 
}

export const Card = ({name, price, stock}) => {
  const bordeStyle = {
    border: `1px solid ${stock===0? 'red':'seagreen'}`,
  }
  return (
    <div className="card" style={bordeStyle}>
      <h3>{name.toUpperCase()}</h3>
      <p style={{margin:'8px 0px'}}>Price: {price}</p>
      <p>Stock: {stock}</p>
      <div className="flex justify-between items-center">
        <button onClick={(event)=> alert('Price is: ' + price)}>Price</button>
        <button onClick={()=> alert('Name is: ' + name)}>Name</button>
      </div>
    </div>
  )
}