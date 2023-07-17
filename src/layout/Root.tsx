import Main from 'pages/main'
import NavBar from './navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Root() {
  const navigation = useNavigation()
  return (
    <div className="relative">
      <div className="fixed top-0 mx-auto left-0 right-0 z-50">
        <NavBar />
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default Root
