import React from 'react'
import { useSelector } from 'react-redux'

import './CartBlock.scss'

const CartBlock = ({ openCart }) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  return (
    <div className='cart-block' onClick={openCart}>
      <img src="img/cart.svg" alt="" className="cart-block__icon" />
      <div className="cart-block__price">
        {totalPrice} руб.
      </div>
    </div>
  )
}

export default CartBlock