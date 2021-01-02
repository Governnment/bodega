import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import CategorySlider from '../components/CategorySlider'
import DeliveryTime from '../components/DeliveryTime'
import Recomendations from '../components/Recomendations'
import MyOrders from '../components/MyOrders'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <CategorySlider />
      <DeliveryTime />
      <Recomendations />
      <MyOrders />
    </>
  )
}

export default HomeScreen
