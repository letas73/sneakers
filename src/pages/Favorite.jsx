import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem/CardItem';
import FavoriteEmpty from '../components/FavoriteEmpty/FavoriteEmpty';

const Favorite = () => {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems)

  if (!favoriteItems.length) {
    return <FavoriteEmpty />
  }

  return (
    <div className='favorites'>
      <div className="favorites__top">
        <Link to='/' className='favorites__link'>
          <img src="img/back-arrow.svg" alt="" className="favorites__link-icon" />
        </Link>
        <h1 className="favorites__title">
          Мои закладки
        </h1>
      </div>
      <ul className="favorites__list card">
        {
          favoriteItems.map((item) => (
            <CardItem key={item.id} {...item} />
          ))
        }
      </ul>
    </div>
  )
}

export default Favorite