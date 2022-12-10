import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/Cart/cart'
import { addFavoriteItem, removeFavoriteItem } from '../../redux/Favorite/favorite'

import './CardItem.scss'

const CardItem = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.cartItems)
  const favoriteItem = useSelector((state) => state.favorite.favoriteItems)

  const isItemInCart = cartItem.some((obj) => obj.id === id)
  const isItemInFavorite = favoriteItem.some((obj) => obj.id === id)

  const onClickAddToCart = () => {
    const item = {
      id,
      price,
      title, 
      imageUrl,
    }
    if (cartItem.find((obj) => obj.id === id)) {
      dispatch(removeItem(id))
    } else {
      dispatch(addItem(item))
    }
  }

  const onClickAddToFavorite = () => {
    const item = {
      id,
      price,
      title,
      imageUrl,
    }
    if (favoriteItem.find((obj) => obj.id === id)) {
      dispatch(removeFavoriteItem(id))
    } else {
      dispatch(addFavoriteItem(item))
    }
  } 

  return (
    <li className='card-item'>
      <div className="card-item__preview">
        <img src={imageUrl} alt="" className="card-item__preview-img" />
        <button className="card-item__favorite" onClick={onClickAddToFavorite}>
          <img src={isItemInFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'} alt="" className="card-item__favorite-icon" />
        </button>
      </div>
      <div className="card-item__title">
        {title}
      </div>
      <div className="card-item__footer">
        <div className="card-item__price">
          <div className="card-item__price-caption">
            Цена:
          </div>
          <div className="card-item__price-current">
            <b>{price} руб.</b> 
          </div>
        </div>
        <button className="card-item__add" onClick={onClickAddToCart}>
          <img src={isItemInCart ? 'img/card-added.svg' : 'img/card-add.svg'} alt="" className="card-item__add-icon" />
        </button>
      </div>
    </li>
  )
}

export default CardItem