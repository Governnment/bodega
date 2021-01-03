import React from 'react'
import { Link } from 'react-router-dom'

const MyOrders = () => {
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
        <Link to='/' className='order-details-choose-time'>
          Choose time
        </Link>
      </div>
    </div>
  )
}

export default MyOrders
