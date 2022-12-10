import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardItem from '../components/CardItem/CardItem'
import { fetchItems } from '../redux/Items/fetchItems'

const Home = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.items)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='home'>
      <div className="products">
        <div className="products__header">
          <h1 className="products__title">
            Все кроссовки
          </h1>
          <div className="products__search">
            <img src="img/search.svg" alt="" className="products__search-icon" />
            <input type="search" value={searchValue} onChange={onChangeSearchValue} className="products__search-input" placeholder='Поиск...' />
          </div>
        </div>
        <ul className="products__card card">
          {
            items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((obj) => (
              <CardItem key={obj.id} {...obj} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Home