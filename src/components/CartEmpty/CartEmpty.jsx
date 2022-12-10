import React from 'react'
import './CartEmpty.scss'

const CartEmpty = ({ onCloseCart }) => {
  return (
    <div className='cart-empty'>
      <img src="img/cart-empty.png" alt="" className="cart-empty__img" />
      <h3 className="cart-empty__title">
        Корзина пустая
      </h3>
      <p className="cart-empty__descr">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <button className="cart-empty__btn" onClick={onCloseCart}>
        <img src="img/arrow-left.svg" alt="" className="cart-empty__btn-arrow" />
        <span className="cart-empty__btn-text">
          Вернуться назад
        </span>
      </button>       
    </div>
  )
}

export default CartEmpty