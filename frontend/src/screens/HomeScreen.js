import React from 'react'
import Header from '../components/Header'
import CategorySlider from '../components/CategorySlider'
import Recomendations from '../components/Recomendations'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <div className='banner'>
        <img src='bannerImage' />
        <h3></h3>
        <p></p>
        <p>
          {' '}
          Learn More
          <i className='i-r-arrow'></i>
        </p>
      </div>
      <h2>Restaurant</h2>
      <CategorySlider />
      <Recomendations />
    </>
  )
}

export default HomeScreen
