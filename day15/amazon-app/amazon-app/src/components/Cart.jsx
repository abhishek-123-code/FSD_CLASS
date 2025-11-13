import React from 'react'

function Cart() {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      <div className="cart-content">
        <p>Your cart is empty</p>
        <button className="continue-shopping">Continue Shopping</button>
      </div>
    </div>
  )
}

export default Cart