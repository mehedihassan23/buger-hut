import React from 'react'
import "../Main/Main.css"
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Main
