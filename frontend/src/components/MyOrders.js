import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputNumber } from 'antd'
import { TimePicker } from 'antd'
import moment from 'moment'
import orderBurger from '../images/order/order-item-burger.png'
import orderFrenchFries from '../images/order/order-item-french-fries.png'
import orderSause from '../images/order/order-item-sause.png'
import delivery from '../images/order/transport.png'

const MyOrders = () => {
  function onChange(value) {
    console.log('changed', value)
  }

  function onChange(time, timeString) {
    console.log(time, timeString)
  }

  return (
    <div className='my-orders'>
      <i className='i-profile' />
      <div className='order-numbers'>
        <span>3</span>
      </div>
      <h2>
        My 😎 <br />
        Order
      </h2>
      <div className='order-details'>
        <span className='order-details-address'>625 St Marks Ave</span>
        <Link to='/' className='order-details-edit'>
          Edit
        </Link>
        <div className='time-wrapper'>
          <i className='i-time' />
        </div>
        <p className='order-details-time'>35 min</p>

        <TimePicker
          className='order-details-choose-time'
          placeholder='Choose time'
          onChange={onChange}
          defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        />
      </div>
      <div className='order-items-list'>
        <div className='order-item'>
          <img src={orderBurger} alt='burger' />
          <span>1 x</span>
          <h3>Beach BBQBurger</h3>
          <p>$14.99</p>
        </div>
        <div className='order-item'>
          <img src={orderFrenchFries} alt='burger' />
          <span>1 x</span>
          <h3>French Fries</h3>
          <p>$9.99</p>
        </div>
        <div className='order-item'>
          <img src={orderSause} alt='burger' />
          <span>1 x</span>
          <h3>Cheese Sause</h3>
          <p>$0.99</p>
        </div>
        <div className='order-delivery'>
          <div className='wrapper'>
            <img src={delivery} alt='burger' />
          </div>
          <h3>Delivery</h3>
          <p>$0.00</p>
        </div>
        <div className='order-total'>
          <h4>Total:</h4>
          <strong>$2325.97</strong>
          <hr />
        </div>
        <div className='order-checkout'>
          <p>Persons</p>
          <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            onChange={onChange}
            readonly='readonly'
          />
          <button>
            Checkout <i className='i-r-arrow'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
