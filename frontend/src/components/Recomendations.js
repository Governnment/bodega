import React from 'react'
import burger from '../images/recomendation/burger.png'
import dessert from '../images/recomendation/dessert.png'
import pizza from '../images/recomendation/pizza.png'

const Recomendations = () => {
  return (
    <>
      <div className='recomendations'>
        <div className='recomendations-item'>
          <img src={burger} alt='recomendations' />
          <div className='recomendations-time-wrapper'>
            <p className='recomendations-time'>25 - 30 min</p>
          </div>
          <h3>The Classic Burger</h3>
          <div className='recomendations-captions'>
            <i className='i-star' />
            <p className='recomendations-rating'>4.8</p>
            <p className='recomendations-location'>
              Joy burger ⋅ <span>Prague</span> ⋅ <span>$$</span>
            </p>
          </div>
        </div>
        <div className='recomendations-item'>
          <img src={dessert} alt='recomendations' />
          <div className='recomendations-time-wrapper'>
            <p className='recomendations-time'>25 - 30 min</p>
          </div>
          <h3>The Classic Burger</h3>
          <div className='recomendations-captions'>
            <i className='i-star' />
            <p className='recomendations-rating'>4.8</p>
            <p className='recomendations-location'>
              Angelato ⋅ <span>Prague</span> ⋅ <span>$$</span>
            </p>
          </div>
        </div>
        <div className='recomendations-item'>
          <img src={pizza} alt='recomendations' />
          <div className='recomendations-time-wrapper'>
            <p className='recomendations-time'>25 - 30 min</p>
          </div>
          <h3>The Classic Burger</h3>
          <div className='recomendations-captions'>
            <i className='i-star' />
            <p className='recomendations-rating'>4.8</p>
            <p className='recomendations-location'>
              Pizzeria Kmotra ⋅ <span>Prague</span> ⋅ <span>$$</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recomendations
