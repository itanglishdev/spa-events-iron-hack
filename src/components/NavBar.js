import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {

    const [state, setState] = useState({
        username:'YOUR NAME'
    })
  return (
    <div className='nav-details' >
        <p className=''>{state.username}</p>
    </div>
  )
}

export default NavBar