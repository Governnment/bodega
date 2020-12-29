import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../images/Saly.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bannerImage} alt='deal' />
      <h3>$0 delivery for 30 days! 🎉</h3>
      <p className='banner-caption'>
        $0 delivery fee for orders over $10 for 30 days
      </p>

      <p className='banner-learn-more'>
        <Link to='link'>
          Learn More
          <i className='i-r-arrow'></i>
        </Link>
      </p>
    </div>
  )
}

export default Banner
