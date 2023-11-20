import React from 'react'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
        <Home/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout