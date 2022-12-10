import React from 'react'
import { useSelector } from 'react-redux'
import CartEmpty from '../CartEmpty/CartEmpty'
import CartItem from '../CartItem/CartItem'

import './Cart.scss'

const Cart = ({ onCloseCart }) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart)
  const taxPrice = (totalPrice / 100) * 5

  return (
    <div className='cart__overlay'>
      <div className="cart">
        <div className="cart__top">
          <h3 className="cart__title">
            Корзина
          </h3>
          <button className="cart__close" onClick={onCloseCart}>
            <span className="cart__close-line"></span>
          </button>
        </div>
        {
          cartItems.length > 0 ? <div className="cart__cont">
            <ul className="cart__product">
              {
                cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))
              }
            </ul>
            <div className="cart__order order">
              <ul className="order__list">
                <li className="order__list-item">
                  <div className="order__list-caption">
                    Итого:
                  </div>
                  <div className="order__list-line"></div>
                  <div className="order__list-price">
                    {totalPrice} руб.
                  </div>
                </li>
                <li className="order__list-item">
                  <div className="order__list-caption">
                    Налог 5%:
                  </div>
                  <div className="order__list-line"></div>
                  <div className="order__list-price">
                    {taxPrice} руб.
                  </div>
                </li>
              </ul>
              <button className="order__btn">
                Оформить заказ
                <img src="img/cart-arrow.svg" alt="" className="order__btn-arrow" />
              </button>
            </div>
          </div> : <CartEmpty onCloseCart={onCloseCart} />
        }
      </div>
    </div>
  )
}

export default Cart