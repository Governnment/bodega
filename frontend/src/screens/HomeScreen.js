import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import CategorySlider from '../components/CategorySlider'
import Recomendations from '../components/Recomendations'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <h2>Restaurant 🍔</h2>
      <CategorySlider />
      <Recomendations />
    </>
  )
}

export default HomeScreen
