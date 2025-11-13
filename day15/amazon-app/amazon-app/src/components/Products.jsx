import React from 'react'

function Products() {
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
    },
    {
      id: 4,
      name: "Samsung 65-inch QLED 4K TV",
      price: 1099.99,
      image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
    },
    {
      id: 5,
      name: "PlayStation 5 Console",
      price: 499.99,
      image: "https://m.media-amazon.com/images/I/71PMC4DWWFL._AC_SL1500_.jpg"
    },
    {
      id: 6,
      name: "iPhone 13 Pro Max",
      price: 1099.99,
      image: "https://m.media-amazon.com/images/I/61IJBsHm97L._AC_SL1500_.jpg"
    },
    {
      id: 7,
      name: "Kindle Paperwhite",
      price: 139.99,
      image: "https://m.media-amazon.com/images/I/61Qe7eWH4qL._AC_SL1500_.jpg"
    },
    {
      id: 8,
      name: "Ring Video Doorbell",
      price: 99.99,
      image: "https://m.media-amazon.com/images/I/71vkGzxK6VL._SL1500_.jpg"
    },
    {
      id: 9,
      name: "Bose QuietComfort Earbuds",
      price: 279.99,
      image: "https://m.media-amazon.com/images/I/61z+LnZJPXL._AC_SL1500_.jpg"
    },
    {
      id: 10,
      name: "iRobot Roomba i3+",
      price: 549.99,
      image: "https://m.media-amazon.com/images/I/71Rj3InxQlL._AC_SL1500_.jpg"
    },
    {
      id: 11,
      name: "Samsung Galaxy Tab S7+",
      price: 849.99,
      image: "https://m.media-amazon.com/images/I/71J2FK6KGSL._AC_SL1500_.jpg"
    },
    {
      id: 12,
      name: "GoPro HERO10 Black",
      price: 399.99,
      image: "https://m.media-amazon.com/images/I/71p2fZ3qD9L._AC_SL1500_.jpg"
    },
    {
      id: 13,
      name: "DJI Mini 2 Drone",
      price: 449.99,
      image: "https://m.media-amazon.com/images/I/71ZVyxRXVLL._AC_SL1500_.jpg"
    },
    {
      id: 14,
      name: "LG 34\" Ultrawide Monitor",
      price: 699.99,
      image: "https://m.media-amazon.com/images/I/71J9BvMaFhL._AC_SL1500_.jpg"
    },
    {
      id: 15,
      name: "Nintendo Switch OLED",
      price: 349.99,
      image: "https://m.media-amazon.com/images/I/71Y1U+kUmOL._AC_SL1500_.jpg"
    }
  ]

  return (
    <div className="products">
      <h2>Featured Products</h2>
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
              <button className="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products