import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/Cart/cart'

import './CartItem.scss'

const CartItem = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch()

  const removeItemFromCart = () => {
    dispatch(removeItem(id))
  }

  return (
    <li className='cart-item'>
      <div className="cart-item__info">
        <img src={imageUrl} alt="" className="cart-item__img" />
        <div className="cart-item__info-descr">
          <div className="cart-item__title">
            {title}
          </div>
          <div className="cart-item__price">
            {price} руб.
          </div>
        </div>
      </div>
      <button className='cart-item__delete' onClick={removeItemFromCart}>
        <img src="img/cart-remove.svg" alt="" className='cart-item__delete-icon' />
      </button>
    </li>
  )
}

export default CartItem