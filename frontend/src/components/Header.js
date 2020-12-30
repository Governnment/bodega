import React from 'react'

const Header = () => {
  return (
    <div className='navbar'>
      <span class='burger'></span>
      <h1>Bodega</h1>
      <div className='search-box'>
        <i className='i-search'></i>
        <input type='text' name='' placeholder='Type to search' />
      </div>
    </div>
  )
}

export default Header
