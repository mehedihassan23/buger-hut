import React from 'react'
import "../Main/Main.css"
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
