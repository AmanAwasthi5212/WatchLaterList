import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import WatchLaterList from './components/WatchLaterList'

const Layout = () => {
  return (
    <>
        <Header/>
        {/* <WatchLaterList/> */}
        <Outlet/>
    </>
  )
}

export default Layout
