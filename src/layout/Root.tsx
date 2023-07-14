import Main from 'pages/main'
import NavBar from './navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Root() {
  const navigation = useNavigation()
  return (
    <div className="relative">
      <div className="fixed top-0 mx-auto left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>loading</div>
    </div>
  )
}
export default Root
