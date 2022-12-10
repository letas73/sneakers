import React from 'react'
import { Link } from 'react-router-dom';

import './FavoriteEmpty.scss'

const FavoriteEmpty = () => {
  return (
    <div className='favorite-empty' >
      <img src='img/empty-smile.png' alt='' className="favorite-empty__smile" />
      <h2 className="favorite-empty__title">
        Закладок нет :(
      </h2>
      <p className="favorite-empty__descr">
        Вы ничего не добавляли в закладки
      </p>
      <Link to='/'>
        <div className="favorite-empty__link">
          <img src="img/arrow-left.svg" alt="" className="favorite-empty__link-arrow" />
          <span>Вернуться назад</span>
        </div>
      </Link>
    </div>
  )
}

export default FavoriteEmpty