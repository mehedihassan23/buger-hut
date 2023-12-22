import React from 'react'
import "../Main/Main.css"
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <h1>Main layout</h1>
      <Outlet />
    </div>
  )
}

export default Main
