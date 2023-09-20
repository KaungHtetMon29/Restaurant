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
        <div className="absolute mx-auto left-0 right-0 2xl:-top-52 xl:-top-32 lg:-top-32">
          <div className="flex mx-auto left-0 right-0 promo 2xl:w-fit xl:w-4/6 lg:w-4/6">
            <Getpromo />
          </div>
        </div>
        <Foter />
      </div>
    </div>
  )
}
export default Root
