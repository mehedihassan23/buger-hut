import React from 'react'
import "./Navigation.css"

const Navigation = () => {
  return (
    <div>
      <nav className='navBar'>
        <div className="logo">Burger Hut</div>
        <div className="navList">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
