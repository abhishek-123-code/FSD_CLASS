import React from 'react'

function Home() {
  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 299.99,
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      price: 399.99,
      image: "https://m.media-amazon.com/images/I/71SFsTBSJgL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      name: "MacBook Pro M1",
      price: 1299.99,
      image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
    }
  ];

  return (
    <div className="home">
      <h2>Welcome to Amazon Clone</h2>
      <div className="home-content">
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">
                  <span className="currency">$</span>
                  <span className="amount">{product.price}</span>
                </div>
                <div className="product-rating">
                  {"★".repeat(4)}{"☆".repeat(1)} (4.0)
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home