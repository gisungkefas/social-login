import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'> Kefas App</span>
        <ul className='list'>
            <li className='listItem'>
                <img src='images/wallpaper1.jpeg'
                 alt='' className='avatar' />
            </li>
            <li className='listItem'> Kefas Gisung</li>
            <li className='listItem'> Logout </li>
        </ul>
    </div>
  )
}

export default Navbar