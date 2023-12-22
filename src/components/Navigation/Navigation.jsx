import React from 'react'
import "./Navigation.css"

const Navigation = () => {
  return (
    <div>
      <nav className='navBar'>
        <div className="logo">Burger Hut</div>
        <div className="navList">
            <a href="/home">Home</a>
            <a href="/home">Menu</a>
            <a href="/home">About</a>
            <a href="/home">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
