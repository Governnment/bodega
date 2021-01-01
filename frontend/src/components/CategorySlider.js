import React from 'react'
import { Link } from 'react-router-dom'
import all from '../images/category/all.png'
import pizza from '../images/category/pizza.png'
import asian from '../images/category/asian.png'
import burgers from '../images/category/burgers.png'
import sushi from '../images/category/sushi.png'
import desserts from '../images/category/desserts.png'
import thai from '../images/category/thai.png'
import dining from '../images/category/dining.png'

const CategorySlider = () => {
  return (
    <>
      <h2 className='sliderTitle'>Restaurant 🍔</h2>
      <div className='categorySlider'>
        <Link>
          <div className='categorySlider-item'>
            <div className='wrapper'>
              <img src={all} alt='all' />
            </div>
            <h3>All</h3>
          </div>
        </Link>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={pizza} alt='pizza' />
          </div>
          <h3>Pizza</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={asian} alt='asian' />
          </div>
          <h3>Asian</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={burgers} alt='burgers' />
          </div>
          <h3>Burgers</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={sushi} alt='sushi' />
          </div>
          <h3>Sushi</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={desserts} alt='desserts' />
          </div>
          <h3>Desserts</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={thai} alt='thai' />
          </div>
          <h3>Thai</h3>
        </div>
        <div className='categorySlider-item'>
          <div className='wrapper'>
            <img src={dining} alt='dining' />
          </div>
          <h3>Dining</h3>
        </div>

        <div className='CategorySlider-Control'>
          <Link>
            <i className='i-r-arrow-sm' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategorySlider
