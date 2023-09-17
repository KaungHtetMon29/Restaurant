import Main from 'pages/main'
import NavBar from './navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Foter } from 'pages/footer'
import { Getpromo } from './promocode'

function Root() {
  const navigation = useNavigation()
  return (
    <div className="">
      <div className="fixed top-0 mx-auto left-0 right-0 z-50">
        <NavBar />
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
      <div className="relative">
        <div className="absolute mx-auto left-0 right-0 -top-52">
          <div className="flex mx-auto left-0 right-0 promo 2xl:w-fit xl:w-1/2">
            <Getpromo />
          </div>
        </div>
        <Foter />
      </div>
    </div>
  )
}
export default Root
